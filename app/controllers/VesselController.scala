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

  def saveOrUpdate = Action.async(parse.json) { request =>
    scala.concurrent.Future {
      val vesselResult = request.body.validate[Vessel]
      vesselResult.fold(
        errors => {
          BadRequest(Json.obj("status" -> "KO", "message" -> JsError.toJson(errors)))
        },
        vessel => {
          repo.createOrUpdate(vessel)
          Ok(Json.obj("status" -> "OK", "message" -> ("Vessel '" + vessel.name + "' saved.")))
        }
      )
    }
  }

  def list = Action.async {
    repo.list().map { vessel =>
      Ok(Json.toJson(vessel))
    }
  }

  def find(id: Long) = Action.async {
    repo.find(id).map { vessel =>
      Ok(Json.toJson(vessel))
    }
  }

  def relocate(id: Long, latitude: Double, longitude: Double) = Action.async {
    repo.relocate(id, latitude, longitude).map { vessel =>
      Ok(Json.toJson(vessel))
    }
  }

  def delete(id: Long) = Action.async {
    repo.delete(id)
    repo.list().map { vessel =>
      Ok(Json.toJson(vessel))
    }
  }
}