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

 function addTask(task, id) {
  return db('tasks')
    .insert(task, 'id')
    .where({ id })
}

function findTasks() {
  return db('tasks').join('projects', 'tasks.project_id', '=', 'projects.id')

}

function findTaskById(id) {
  return db('tasks')
  .where({ id })
  .select()
}
