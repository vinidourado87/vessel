package controllers

import javax.inject._

import dao._
import models.Person
import play.api.i18n._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.mvc._

import scala.concurrent.ExecutionContext

class PersonController @Inject()(repo: PersonRepository, val messagesApi: MessagesApi)
                                (implicit ec: ExecutionContext) extends Controller with I18nSupport {

  def index() = Action {
    Redirect("/index.html")
  }

  def addPerson = Action.async(parse.json) { request =>
    scala.concurrent.Future {
      val personResult = request.body.validate[Person]
      personResult.fold(
        errors => {
          BadRequest(Json.obj("status" -> "KO", "message" -> JsError.toJson(errors)))
        },
        person => {
          repo.create(person.name, person.age)
          Ok(Json.obj("status" -> "OK", "message" -> ("Person '" + person.name + "' saved.")))
        }
      )
    }
  }

  def getPersons = Action.async {
    repo.list().map { people =>
      Ok(Json.toJson(people))
    }
  }
}
