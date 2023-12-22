const express = require('express');
const router = express.Router();


const credentials = {
	password: 'm295',
};

router.post('/login', (req, res)=>{
	const email = req.body.email;
	const password = req.body.password;

	if(!email || !password){
		console.log('Error 422, Email and Password required')
		return res.status(422).json( {error: '422, Email and Password required'})
	}
	if (password === credentials.password){
		req.session.email = email;
		return res.status(201).json({ email: req.session.email });
	}
	console.log('Error 401: Not logged in')
	return res.status(401).json({ error: '401, Not logged in' });
})
router.get('/verify', function (req, res) {
	if (req.session.email) {
		return res.status(200).json({ email: req.session.email });
	}

	return res.status(401).json({ error: '401, Not logged in' });
});
module.exports = router;