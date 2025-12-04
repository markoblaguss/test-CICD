// Test

const assert = require('assert');
const { hello } = require('./index');

assert.strictEqual(hello(), 'hello world');
assert.strictEqual(hello('marko'), 'hello marko');

console.log('All tests passed ✅');
