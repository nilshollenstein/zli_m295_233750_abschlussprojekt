/* eslint-disable no-console */
const express = require('express');
const { randomUUID } = require('crypto');

const router = express.Router();

let tasks = [];

// give back all tasks
router.get('/', (req, res) => {
  // Checks that the user is logged in
  if (req.session.email) {
    return res.status(200).json(tasks);
  }
  console.log('Error 401: Not logged in');
  return res.status(401).json({ error: '401, Not logged in' });
  // #swagger.summary = 'Get all Tasks'
  // #swagger.description = 'Use a GET request to get all existing tasks'
});
router.post('/', (req, res) => {
  // Checks that the user is logged in
  if (req.session.email) {
    //lets the user create a new task with a title and author
    if (!req.body.title || !req.body.author) {
      console.log('Error 422, an important information is missing');
      return res.status(422).json({
        error: 'Error 422, an important information is missing',
      });
    }

    const newTask = {
      id: randomUUID(),
      title: req.body.title,
      author: req.body.author,
      created_at: new Date(),
      completet_at: "",

    };

    tasks.push(newTask);
    return res.status(201).json(newTask);
  }
  console.log('Error 401: Not logged in');
  return res.status(401).json({ error: '401, Not logged in' });
  // #swagger.summary = 'Create a Task'
  // #swagger.description = 'Use a POST request to create a task with a JSON object'
});

router.get('/:id', (req, res) => {
  // Checks that the user is logged in
  if (req.session.email) {
    //lets the user get one single task
    if (tasks.some((task) => task.id === req.params.id)) {
      return res.status(200).json(tasks.find((task) => task.id === req.params.id));
    }
    console.log('Error 404 , Task not found');
    return res.status(404).json({ error: 'Error 404, Task not found' });
  }
  console.log('Error 401: Not logged in');
  return res.status(401).json({ error: '401, Not logged in' });
  // #swagger.summary = 'Get a singel Task'
  // #swagger.description = 'Use a Get request with an task id to get a single task'
});
router.patch('/:id', (req, res) => {
  // Checks that the user is logged in
  if (req.session.email) {
    //Lets the user change the author, the title or the completet at date
    if (tasks.some((task) => task.id === req.params.id)) {
      const oldTask = tasks.find((task) => task.id === req.params.id);
      oldTask.title = req.body.title || oldTask.title;
      oldTask.author = req.body.author || oldTask.author;
      oldTask.completet_at = req.body.completet_at || oldTask.completet_at;
      tasks = tasks.map(((task) => (task.id === req.params.id ? oldTask : task)));
      return res.status(201).json(oldTask);
    }

    console.log('Error 404 , Task not found');
    return res.status(404).json({ error: 'Error 404, Task not found' });
  }
  console.log('Error 401: Not logged in');
  return res.status(401).json({ error: '401, Not logged in' });
  // #swagger.summary = 'Change a task'
  // #swagger.description = 'Use a PATCH request to change a task with a JSON object'
});

router.delete('/:id', (req, res) => {
  // Checks that the user is logged in
  if (req.session.email) {
    //Lets the user delete a task
    if (tasks.some((task) => task.id === req.params.id)) {
      const deletedTask = tasks.filter((task) => task.id === req.params.id);
      tasks = tasks.filter((task) => task.id !== req.params.id);
      return res.json(deletedTask).status(200);
    }
    console.log('Error 404 , Task not found');
    return res.status(404).json({ error: 'Error 404, Task not found' });
  }
  console.log('Error 401: Not logged in');
  return res.status(401).json({ error: '401, Not logged in' });
  // #swagger.summary = 'Delete a task'
  // #swagger.description = 'Use a Delete request with a task id to delete a task '
});
module.exports = router;
