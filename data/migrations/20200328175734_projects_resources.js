
exports.up = function(knex) {
  return knex.schema.createTable('projects_resources', table => {

    table.primary(['project_id', 'resource_id']);

    table.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')

    table.integer('resource_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('resources')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects_resources');
};
