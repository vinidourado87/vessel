package dao

import javax.inject.{ Inject, Singleton }
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.JdbcProfile

import models.Vessel

import scala.concurrent.{ Future, ExecutionContext }
import java.sql.Date

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
    def latitude = column[Double]("latitude")
    def longitude = column[Double]("longitude")
    def updatedAt = column[Date]("updated_at")

    def * = (id, name, width, length, draft, latitude, longitude, updatedAt) <> ((Vessel.apply _).tupled, Vessel.unapply)
  }
  
  private val vessel = TableQuery[VesselTable]

  def createOrUpdate(vessel: Vessel) {
    val query = this.vessel.insertOrUpdate(vessel)
    db.run(query)
  }

  def list(): Future[Seq[Vessel]] = db.run {
    vessel.result
  }

  def relocate(id: Long, newLatitude: Double, newLongitude: Double) = {
    val query = vessel.filter(_.id === id).map(v => (v.latitude, v.longitude)).update((newLatitude, newLongitude))
    db.run(query)
    find(id)
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