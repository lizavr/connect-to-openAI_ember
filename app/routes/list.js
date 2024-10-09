import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ListRoute extends Route {
  @service catalog;

  async model() {
    return this.catalog.movies;
  }
}
