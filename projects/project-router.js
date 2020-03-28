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

router.post('/', (req, res) => {
  const newProject = req.body
  Projects.add(newProject)
    .then(project => {
      res.status(200).json(project)
    })
    .catch( error => res.status(500).json({"message": "there was an error creating the project"}))
})

router.get('/:id/tasks', (req, res) => {
  Projects.findById(req.params.id)
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch( error => res.status(500).json({"message": "there was an error retrieving the tasks"}))
})

router.post('/:id/tasks', (req, res) => {
  Projects.addTask(req.body)
    .then(task => {
      res.status(200).json(task)
    })
    .catch( error => res.status(500).json({"message": "there was an  error creating the tasks"}))
})

router.get('/resources', (req, res) => {
  Projects.findResource(req.params.id)
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch( error => res.status(500).json({"message": "there was an error retrieving the tasks"}))
})

router.post('/resources', (req, res) => {
  Projects.addResource(req.body)
    .then(task => {
      res.status(200).json(task)
    })
    .catch( error => res.status(500).json({"message": "there was an  error creating the tasks"}))
})



module.exports = router;