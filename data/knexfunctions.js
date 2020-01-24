const connect = require('knex')(require('../knexfile').development)

//All of each
exports.projects = connect('projects')
exports.recources = connect("recources");
exports.tasks = connect("tasks");

//Add Function
exports.addProject = project => connect('projects').insert(project)
exports.addRecource = recource => connect("projects").insert(recource);
exports.addTask = task => connect("projects").insert(task);