const router = require('express').Router();

const Projects = require('./project-model.js');


router.get('/', (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch( error => {
      res.status(500).json({"message": "there was an error retrieving the projects"})
    })
})

router.get('/:id', (req, res) => {
  Projects.findById(req.params.id)
    .then(project => {
      res.status(201).json(project)
      console.log(`project number ${id}`)
    })
    .catch( error => {
      res.status(500).json({"message": "there was an error retrieving the project by that id"})
    })
})

router.get('/:id/tasks', (req, res) => {
  Projects.findTasks()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch( error => res.status(500).json({"message": "there was an error retrieving the tasks"}))
})

router.post('/:id/tasks', (req, res) => {
  const projectId = req.params.id

  Projects.addTask(req.body, projectId)
    .then(task => {
      res.status(200).json(task)
    })
    .catch( error => res.status(500).json({"message": "there was an  error creating the tasks"}))
})


router.post('/', (req, res) => {
  const newProject = req.body
  Projects.add(newProject)
    .then(project => {
      res.status(200).json(project)
    })
    .catch( error => res.status(500).json({"message": "there was an error creating the project"}))
})

module.exports = router;