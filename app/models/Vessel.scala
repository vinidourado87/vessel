package models

import play.api.libs.json._
import play.api.libs.functional.syntax._

case class Vessel(id: Long = 0, name: String, width: Double, length: Double, draft: Double,
    latitude: String, longitude: String)

object Vessel {

  def makeVessel(name: String, width: Double, length: Double, draft: Double, latitude: String, longitude: String) = 
    Vessel(name = name, width = width, length = length, draft = draft, latitude = latitude, longitude = longitude)

  implicit val reads: Reads[Vessel] = (
    (__ \ "name").read[String] and
    (__ \ "width").read[Double] and
    (__ \ "length").read[Double] and
    (__ \ "draft").read[Double] and
    (__ \ "latitude").read[String] and
    (__ \ "longitude").read[String]
   )(makeVessel _)
   
   implicit val writes: Writes[Vessel] = (
    (__ \ "id").write[Long] and
    (__ \ "name").write[String] and
    (__ \ "width").write[Double] and
    (__ \ "length").write[Double] and
    (__ \ "draft").write[Double] and
    (__ \ "latitude").write[String] and
    (__ \ "longitude").write[String]
   )(unlift(Vessel.unapply))
}
