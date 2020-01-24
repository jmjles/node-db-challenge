exports.up = async knex => {
  await knex.schema.createTable("project_recources", tbl => {
    tbl
      .integer("project_ID")
      .unsigned()
      .notNullable()
      .references("project_ID")
      .inTable("projects");
    tbl
      .integer("recource_ID")
      .unsigned()
      .notNullable()
      .references("recource_ID")
      .inTable("recources");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("project_recources");
};
