
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id');
    table.foreign('Project_id').references('projects.project_id');
    table.string('task_description', 120);
    table.string('notes', 120);
    table.boolean('completed').notNullable().defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
