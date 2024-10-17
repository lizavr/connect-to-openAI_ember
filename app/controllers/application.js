import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class ApplicationController extends Controller {
  @tracked hasStarted = false;
  @service router;

  @action
  start() {
    this.hasStarted = true;
    this.router.transitionTo('questionnaire');
  }
}
