const express = require('express');
const app = express();
const endpoints = require('./endpoints')
const session = require('express-session');
const authentication = require('./authentication')
app.use(express.json());
const port = 3000;




app.use(
	session({
		secret: 'supersecret',
		resave: false,
		saveUninitialized: true,
		cookie: {},
	})
);

app.use(
	'/',
	authentication
);
app.use(
	'/tasks',
	endpoints
);
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});