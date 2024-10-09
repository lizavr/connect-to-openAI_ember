import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MovieCardComponent extends Component {
  @tracked isModalVisible = false;

  @action
  showModal() {
    this.isModalVisible = true;
  }

  @action
  hideModal() {
    this.isModalVisible = false;
  }
}
