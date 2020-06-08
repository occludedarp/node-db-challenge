const db = require('../data/db-config.js');

module.exports = {
  add,
  find,
  findById,
  addTask,
  findTasks,
  findTaskById,
  addResource,
  findResource,
  findResourceById
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

async function addResource(resource) {

  // db('projects_resources').insert(id, 'id')

  const [projectId] = await db('resources').insert(resource, 'id')
  return findResourceById(projectId)
}

function findResource(id) {
  return db('resources')
    .where({ id: id })
    .select()
}

async function findResourceById(id) {
  const resourceId = await db('projects_resources')
    .where({ resource_id: id })
    .select()

  return findResource(resourceId)
}
