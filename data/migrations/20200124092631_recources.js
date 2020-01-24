exports.up = async knex => {
  await knex.schema.createTable("recources", tbl => {
    tbl.increments("recource_ID");
    tbl.string("name").notNullable();
    tbl.string("description");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("recources");
};
