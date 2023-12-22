const express = require('express');
const app = express();
const endpoints = require('./endpoints')

app.use(express.json());
const port = 3000;


app.use(
	'/',
	endpoints
);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});