import loadInitializers from 'ember-load-initializers';
import config from 'ember-list/config/environment';
import Application from '@ember/application';
import Resolver from 'ember-resolver';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
