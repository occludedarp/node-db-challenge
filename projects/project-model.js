const db = require('../data/db-config.js');

module.exports = {
  add,
  find,
  findById,
  addTask,
  findTasks,
  findTaskById,

}

async function add(project) {
  const [id] = await db('projects').insert(project, 'id');
  return findById(id);
}

function find() {
  return db('projects')
}

function findById(id) {
  return db('projects')
    .where({ id })
    .select()
}

async function addTask(task) {
  const [taskId] = await db('tasks').insert(task, 'id')
  return findTaskById(taskId)
}

function findTasks(id) {
  return db('tasks')
    .where({ project_id: id })
    .select()
}

function findTaskById(id) {
  return db('tasks')
    .where({ id })
    .select()
}
