'use strict';
const todo = require('./index.js');
const assert = require('assert');

// todo and list test
todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);


// done and donelist test
todo.done('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う']);
assert.deepEqual(todo.doneList(), ['鉛筆を買う']);

//del test
todo.del('鉛筆を買う');
todo.del('ノートを買う');
assert.deepEqual(todo.list(), [])
assert.deepEqual(todo.doneList(), [])

console.log('テストが正常に完了しました');