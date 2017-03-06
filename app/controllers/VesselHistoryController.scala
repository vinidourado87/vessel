package controllers

import javax.inject._

import dao._
import models.VesselHistory
import play.api.i18n._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.mvc._

import scala.concurrent.ExecutionContext

class VesselHistoryController @Inject()(repo: VesselHistoryRepository, val messagesApi: MessagesApi)
                                (implicit ec: ExecutionContext) extends Controller with I18nSupport  {
  
  def list(id: Long) = Action.async {
    repo.list(id).map { vesselHistory =>
      Ok(Json.toJson(vesselHistory))
    }
  }
}
