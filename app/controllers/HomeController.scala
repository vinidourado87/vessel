package controllers

import javax.inject._

import dao._
import models.Person
import play.api.i18n._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.mvc._

import scala.concurrent.ExecutionContext

class HomeController @Inject()(repo: PersonRepository, val messagesApi: MessagesApi)
                                (implicit ec: ExecutionContext) extends Controller with I18nSupport {
  
  def index() = Action {
    Redirect("/index.html")
  }

}
