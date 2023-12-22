const express = require('express');
const { randomUUID } = require('crypto');
const authentication  = require('./authentication')


const router = express.Router();

let tasks = [];

router.get('/', (req, res) => {
	if(req.session.email){
			return res.status(200).json(tasks);
	}
	console.log('Error 401: Not logged in')
	return res.status(401).json({ error: '401, Not logged in' });
})
router.post('/', (req, res) => {
	if(req.session.email){
		if(!req.body.title || !req.body.author ){
				console.log('Error 422, an important information is missing');
				return res.status(422).json({
					error: "Error 422, an important information is missing"
				})
				
			}

			const newTask = {
				id: randomUUID(),
				title: req.body.title,
				author: req.body.author,
				created_at: new Date(),
				completet_at: null
				
			}


	tasks.push(newTask);
	return res.status(201).json(newTask);
	}
	console.log('Error 401: Not logged in')
	return res.status(401).json({ error: '401, Not logged in' });
})

router.get('/:id', (req, res) => {
	if(req.session.email){
		if(tasks.some((task)=> task.id === req.params.id)){
		return res.status(200).json(tasks.find((task)=>task.id === req.params.id
		));
	}
	console.log('Error 404 , Task not found')
	return res.status(404).json({ error: "Error 404, Task not found"});
	}
	console.log('Error 401: Not logged in')
	return res.status(401).json({ error: '401, Not logged in' });
	
})
router.patch('/:id', (req, res)=>{
	if(req.session.email){
		if(tasks.some((task)=> task.id === req.params.id)){
  		const oldTask = tasks.find((task) => task.id === req.params.id );
  		oldTask.title = req.body.title || oldTask.title;
		oldTask.author = req.body.author || oldTask.author;
		oldTask.completet_at = req.body.completet_at || oldTask.completet_at;
		tasks = tasks.map((task=> task.id === req.params.id ? oldTask : task))
		return res.status(201).json(oldTask)
	
	}

	console.log('Error 404 , Task not found')
	return res.status(404).json({ error: "Error 404, Task not found"});
	
	}
	console.log('Error 401: Not logged in')
	return res.status(401).json({ error: '401, Not logged in' });
})


router.delete('/:id', (req, res)=>{
	if(req.session.email){
		if(tasks.some((task)=> task.id === req.params.id)){

		const deletedTask = tasks.filter((task)=> task.id === req.params.id)
  		tasks = tasks.filter((task)=>task.id !== req.params.id )
		return res.json(deletedTask).status(200)
		
	}
	console.log('Error 404 , Task not found')
	return res.status(404).json({ error: "Error 404, Task not found"});
	}
	console.log('Error 401: Not logged in')
	return res.status(401).json({ error: '401, Not logged in' });
})
module.exports = router;