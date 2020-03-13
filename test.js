'use strict';
const todo = require('./index.js');
const assert = require('assert');

// todo and list test
todo.todo('task1');
todo.todo('task2');
assert.deepEqual(todo.list(), ['task1', 'task2']);


// done and donelist test
todo.done('task2');
assert.deepEqual(todo.list(), ['task1']);
assert.deepEqual(todo.doneList(), ['task2']);

//del test
todo.del('task1');
todo.del('task1');
assert.deepEqual(todo.list(), [])
assert.deepEqual(todo.doneList(), [])

console.log('success!');