package dao

import javax.inject.{ Inject, Singleton }
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.JdbcProfile

import models.VesselHistory

import scala.concurrent.{ Future, ExecutionContext }
import java.sql.Date

@Singleton
class VesselHistoryRepository @Inject() (dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) {

  private val dbConfig = dbConfigProvider.get[JdbcProfile]
  
  import dbConfig._
  import driver.api._
  
  private class VesselHistoryTable(tag: Tag) extends Table[VesselHistory](tag, "vessel_history") {

    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def idVessel = column[Long]("id_vessel")
    def latitude = column[Double]("latitude")
    def longitude = column[Double]("longitude")
    def date = column[Date]("date")

    def * = (id, idVessel, latitude, longitude, date) <> ((VesselHistory.apply _).tupled, VesselHistory.unapply)
  }
  
  private val vesselHistoryTable = TableQuery[VesselHistoryTable]

  def createOrUpdate(vesselHistory: VesselHistory) {
    val query = this.vesselHistoryTable.insertOrUpdate(vesselHistory)
    db.run(query)
  }

  def list(id: Long): Future[Seq[VesselHistory]] = db.run {
    vesselHistoryTable.filter(_.idVessel === id).result
  }

}
