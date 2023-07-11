const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'posts',
		},
	],
});

const categoryModel = mongoose.model('category', categorySchema);

module.exports = categoryModel;
