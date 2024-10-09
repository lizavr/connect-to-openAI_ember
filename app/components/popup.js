import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PopupComponent extends Component {
  @action
  closeModal() {
    this.args.onClose(); // Call the passed-in action to hide the modal
  }
}
