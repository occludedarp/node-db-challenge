
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('project_id');
    table.string('name', 30);
    table.text('project_description');
    table.boolean('completed').notNullable().defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
