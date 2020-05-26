const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('The REST API inside Docker is working!'));


app.listen(3000, () => {
	console.log('My REST API is running on port 3000!')
	console.log('http://localhost:3000')

})