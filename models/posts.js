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
	category: {
		type: String,
		required: [true, 'Category is required'],
		validate: {
			validator: async function (categoryName) {
				const category = await mongoose
					.model('category')
					.findOne({ name: categoryName });
				return category !== null;
			},
			message:
				'Category doesnot exists. Please choose a category from the list of predefined category',
		},
	},
	date: {
		type: Date,
		default: Date.now,
		index: true,
	},
});

const postsModel = mongoose.model('posts', postSchema);

module.exports = postsModel;
