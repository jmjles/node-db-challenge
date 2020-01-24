exports.up = async knex => {
  await knex.schema.createTable("projects", tbl => {
    tbl.increments("project_ID");
    tbl.string("name").notNullable();
    tbl.string("description");
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("projects");
};
