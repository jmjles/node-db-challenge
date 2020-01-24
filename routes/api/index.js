const route = require('express').Router()
const {projects,recources,tasks,addProject,addTask,addRecource} = require('../../data/knexfunctions')
route.get('/',async (req,res)=> res.json(await projects))
route.get("/recources", async (req, res) => res.json(await recources));
route.get("/tasks", async (req, res) => res.json(await tasks));

route.post("/project", async (req, res) => {
  try {
    const project = {
      description: req.body.description,
      name: req.body.name
    };
    if (!project.description || !project.name)
      return res
        .status(400)
        .json({ error: "Required feilds must have a valid value" });
    res.status(201).json(await addProject(project));
  } catch (er) {
    res
      .status(500)
      .json({ error: "There was an error processing your request." });
    console.log(er);
  }
});

route.post("/recource", async (req, res) => {
  try {
    const recource = {
      description: req.body.description,
      name: req.body.name
    };
    if (!recource.description || !recource.name)
      return res
        .status(400)
        .json({ error: "Required feilds must have a valid value" });
    res.status(201).json(await addRecource(recource));
  } catch (er) {
    res
      .status(500)
      .json({ error: "There was an error processing your request." });
    console.log(er);
  }
});

route.post('/:id/task',async (req,res) =>{
    try{
    const id = req.params.id
    const task = {
        description: req.body.description,
        notes: req.body.notes,
        project_ID:id
    }
    if(!task.description || !task.notes) return res.status(400).json({error:"Required feilds must have a valid value"})
    res.status(201).json(await addTask(task,id))
    }catch(er){
        res.status(500).json({error: "There was an error processing your request."})
        console.log(er)
    }
    
})
module.exports = route