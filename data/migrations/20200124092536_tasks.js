exports.up = async knex => {
  await knex.schema.createTable("tasks", tbl => {
    tbl.increments("task_ID");
    tbl.string("description").notNullable();
    tbl.string("notes");
    tbl.string("completed").defaultTo("false");
    tbl
      .integer("project_ID")
      .unsigned()
      .notNullable()
      .references("project_ID")
      .inTable("projects");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("tasks");
};
