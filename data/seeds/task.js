exports.seed = knex =>
  knex("tasks")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("tasks").insert([
        { description: "Computer", notes: "", project_ID:1},
        { description: "Conference room", notes: "",project_ID:1},
        { description: "Microphone", notes: "",project_ID: 2 },
        { description: "Delivery van", notes: "",project_ID:3 }
      ]);
    });
