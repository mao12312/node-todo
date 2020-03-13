'use script';
// ket:task name value:task boolean(done or yet)
const tasks = new Map();

/**
 * todo: add task
 * @param {string} task 
 */
function todo(task) {
    tasks.set(task, false);
}

/**
 * return true when task is true
 * @param {array} e 
 */
function isDone(e) {
    return e[1];
}

/**
 * returrn true when task is false
 * @param {array} e 
 */
function isNotDone(e) {
    return !e[1];
}

/**
 * todo: display not done list
 */
function list() {
    return Array.from(tasks).filter(isNotDone).map(e => e[0]);
}

/**
 * todo: display done list
 */
function doneList() {
    return Array.from(tasks).filter(isDone).map(e => e[0]);
}

/**
 * todo: task done
 * @param {string} task 
 */
function done(task) {
    if (tasks.has(task)) {
        tasks.set(task, true)
    }
}

/**
 * delete task
 * @param {string} task 
 */
function del(task) {
    tasks.delete(task)
}

module.exports = {
    todo,
    list,
    done,
    doneList,
    del
};

