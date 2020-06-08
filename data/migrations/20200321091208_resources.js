
exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
    table.increments();
    table.string('name', 30).unique();
    table.string('resource_description', 120)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources');
};
