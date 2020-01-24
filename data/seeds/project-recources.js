exports.seed = knex =>
  knex("project_recources")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("project_recources").insert([
        { project_ID: 1, recource_ID: 1 },
        { project_ID: 2, recource_ID: 2 },
        { project_ID: 3, recource_ID: 3 },
        { project_ID: 4, recource_ID: 1 }
      ]);
    });
