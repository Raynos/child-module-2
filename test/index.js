'use strict';

var test = require('tape');

var childModule2 = require('../index.js');

test('childModule2 is a function', function t(assert) {
    assert.equal(typeof childModule2, 'function');
    assert.end();
});
