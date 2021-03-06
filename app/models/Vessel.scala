package models

import play.api.libs.json._
import play.api.libs.functional.syntax._
import java.sql.Date

case class Vessel(id: Long = 0, name: String, width: Double, length: Double, draft: Double,
    latitude: Double, longitude: Double, updatedAt: Date = new Date(new java.util.Date().getTime))

object Vessel {

  def makeVessel(id: Long = 0, name: String, width: Double, length: Double, draft: Double, latitude: Double, longitude: Double) = 
    Vessel(id = id, name = name, width = width, length = length, draft = draft, latitude = latitude, longitude = longitude)

  implicit val reads: Reads[Vessel] = (
    (__ \ "id").read[Long] and
    (__ \ "name").read[String] and
    (__ \ "width").read[Double] and
    (__ \ "length").read[Double] and
    (__ \ "draft").read[Double] and
    (__ \ "latitude").read[Double] and
    (__ \ "longitude").read[Double]
   )(makeVessel _)
   
   implicit val writes: Writes[Vessel] = (
    (__ \ "id").write[Long] and
    (__ \ "name").write[String] and
    (__ \ "width").write[Double] and
    (__ \ "length").write[Double] and
    (__ \ "draft").write[Double] and
    (__ \ "latitude").write[Double] and
    (__ \ "longitude").write[Double] and
    (__ \ "updatedAt").write[Date]
   )(unlift(Vessel.unapply))
}
