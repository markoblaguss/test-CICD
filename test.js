const assert = require('assert');
const { hello } = require('./index');

assert.strictEqual(hello(), 'HELLO world'); // WRONG on purpose
assert.strictEqual(hello('marko'), 'hello marko');

console.log('All tests passed ✅');
