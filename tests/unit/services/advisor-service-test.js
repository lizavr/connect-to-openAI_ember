import { module, test } from 'qunit';
import { setupTest } from 'ember-list/tests/helpers';

module('Unit | Service | advisor-service', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:advisor-service');
    assert.ok(service);
  });
});
