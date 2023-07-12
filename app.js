const express = require('express');
const app = express();
require('./config/mongoDB');
const postRouter = require('./routes/posts');

app.use(express.json());

app.use('/', postRouter);

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
