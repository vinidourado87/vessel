package models

import play.api.libs.json._
import play.api.libs.functional.syntax._
import java.sql.Date

case class VesselHistory(id: Long = 0, idVessel: Long, latitude: Double, longitude: Double, date: Date = new Date(new java.util.Date().getTime))

object VesselHistory {

  def makeVesselHitory(id: Long = 0, idVessel: Long, latitude: Double, longitude: Double) = 
    VesselHistory(id = id, idVessel = idVessel, latitude = latitude, longitude = longitude)

  implicit val reads: Reads[VesselHistory] = (
    (__ \ "id").read[Long] and
    (__ \ "idVessel").read[Long] and
    (__ \ "latitude").read[Double] and
    (__ \ "longitude").read[Double]
   )(makeVesselHitory _)
   
   implicit val writes: Writes[VesselHistory] = (
    (__ \ "id").write[Long] and
    (__ \ "idVessel").write[Long] and
    (__ \ "latitude").write[Double] and
    (__ \ "longitude").write[Double] and
    (__ \ "date").write[Date]
   )(unlift(VesselHistory.unapply))
}
