import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class StartComponent extends Component {
  @tracked hasStarted = false;
  @service router;

  @action
  start() {
    this.hasStarted = true;
    this.router.transitionTo('questionnaire');
  }
}
