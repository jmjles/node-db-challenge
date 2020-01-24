exports.seed = knex =>
  knex("recources")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("recources").insert([
        { name: "Computer", description: "" },
        { name: "Conference room", description: "" },
        { name: "Microphone", description: "" },
        { name: "Delivery van", description: "" }
      ]);
    });
