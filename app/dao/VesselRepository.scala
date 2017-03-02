package dao

import javax.inject.{ Inject, Singleton }
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.JdbcProfile

import models.Vessel

import scala.concurrent.{ Future, ExecutionContext }

@Singleton
class VesselRepository @Inject() (dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) {

  private val dbConfig = dbConfigProvider.get[JdbcProfile]
  
  import dbConfig._
  import driver.api._
  
  private class VesselTable(tag: Tag) extends Table[Vessel](tag, "vessel") {

    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def name = column[String]("name")
    def width = column[Double]("width")
    def length = column[Double]("length")
    def draft = column[Double]("draft")
    def latitude = column[String]("latitude")
    def longitude = column[String]("longitude")

    def * = (id, name, width, length, draft, latitude, longitude) <> ((Vessel.apply _).tupled, Vessel.unapply)
  }
  
  private val vessel = TableQuery[VesselTable]

  def create(name: String, width: Double, length: Double, draft: Double, latitude: String, longitude: String): Future[Vessel] = db.run {
    (vessel.map(p => (p.name, p.width, p.length, p.draft, p.latitude, p.longitude))
      returning vessel.map(_.id)
      into ((vessel, id) => Vessel(id, vessel._1, vessel._2, vessel._3, vessel._4, vessel._5, vessel._6))
    ) += (name, width, length, draft, latitude, longitude)
  }

  def list(): Future[Seq[Vessel]] = db.run {
    vessel.result
  }

  def relocate(id: Long, newLatitude: String, newLongitude: String) {
    val query = vessel.filter(_.id === id).map(v => (v.latitude, v.longitude)).update((newLatitude, newLongitude))
    db.run(query)
  }

  def find(id: Long) = {
    val query = vessel.filter(_.id === id).result.headOption
    db.run(query)
  }

  def delete(id: Long) {
    val query = vessel.filter(_.id === id)
    db.run(query.delete)
  }
}