package controllers

import javax.inject._

import dao._
import models.Vessel
import play.api.i18n._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.mvc._

import scala.concurrent.ExecutionContext

class VesselController @Inject()(repo: VesselRepository, val messagesApi: MessagesApi)
                                (implicit ec: ExecutionContext) extends Controller with I18nSupport {
  
  def index() = Action {
    Redirect("/index.html")
  }
  
  def addVessel = Action.async(parse.json) { request =>
    scala.concurrent.Future {
      val vesselResult = request.body.validate[Vessel]
      vesselResult.fold(
        errors => {
          BadRequest(Json.obj("status" -> "KO", "message" -> JsError.toJson(errors)))
        },
        vessel => {
          repo.create(vessel.name, vessel.width, vessel.length, vessel.draft, vessel.latitude, vessel.longitude)
          Ok(Json.obj("status" -> "OK", "message" -> ("Vessel '" + vessel.name + "' saved.")))
        }
      )
    }
  }

  def getVessels = Action.async {
    repo.list().map { vessel =>
      Ok(Json.toJson(vessel))
    }
  }
}