const mongoose = require('mongoose');

const url = `mongodb+srv://venka7m:admin@cluster0.1gox7bx.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(url, connectionParams)
	.then(() => {
		console.log('Connected to the database ');
	})
	.catch((err) => {
		console.error(`Error connecting to the database. n${err}`);
	});
