const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	category: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'category',
		},
	],
	date: {
		type: Date,
		default: Date.now,
		index: true,
	},
});

const postsModel = mongoose.model('posts', postSchema);

module.exports = postsModel;
