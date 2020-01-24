const connect = require('knex')(require('../knexfile').development)

//All of each
exports.projects = connect('projects')
exports.recources = connect("recources");
exports.tasks = connect("tasks");

//Add Function
exports.addProject = project => connect('projects').insert(project)
exports.addRecource = recource => connect("recources").insert(recource);
exports.addTask = async task => connect("tasks").insert(task);
