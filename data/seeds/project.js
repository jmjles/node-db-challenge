exports.seed = knex =>
  knex("projects")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Sprint", description: "Complete Sprint" },
        { name: "Job Search", description: "" },
        { name: "Portfolio", description: "" },
        { name: "Day to Day", description: "" }
      ]);
    });
