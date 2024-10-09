import { setApplication } from '@ember/test-helpers';
import config from 'ember-list/config/environment';
import Application from 'ember-list/app';
import { start } from 'ember-qunit';
import { setup } from 'qunit-dom';
import * as QUnit from 'qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
