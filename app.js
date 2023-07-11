const express = require('express');
const app = express();
require('./config/mongoDB');

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
