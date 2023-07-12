const express = require('express');
const router = express.Router();
const PostModel = require('../models/posts');
const Category = require('../models/category');

//Create a New Post

router.post('/posts', async (req, res) => {
	try {
		const post = await PostModel.create(req.body);
		res.status(201).json(post);
	} catch (error) {
		if (error.name === 'ValidationError') {
			const validationErrors = Object.values(error.errors).map(
				(err) => err.message
			);
			const predefinedCategoryError =
				validationErrors.includes('Invalid category');
			if (predefinedCategoryError) {
				res.status(400).json({
					message:
						'Category doesnot exists. Please choose a category from the list of predefined category',
				});
			} else {
				res
					.status(400)
					.json({ message: 'Validation error', errors: validationErrors });
			}
		} else {
			res.status(500).json({ message: 'Server error' });
		}
	}
});

//Retrieving a post by Post ID

router.get('/posts/:id', async (req, res) => {
	try {
		const postId = req.params.id;
		const post = await PostModel.findById(postId);
		if (!post) {
			return res.status(404).json({ message: 'Post not found' });
		}
		res.json(post);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
});

//Editing a Post

router.put('/posts/:id', async (req, res) => {
	try {
		const postId = req.params.id;
		const updatedPostFields = req.body;
		const existingPost = await PostModel.findById(postId);
		if (!existingPost) {
			console.log('Post not found');
			return res.status(404).json({ message: 'Post not found' });
		}

		if (
			updatedPostFields.category === undefined ||
			(typeof updatedPostFields.category === 'string' &&
				updatedPostFields.category.trim() === '')
		) {
			return res
				.status(400)
				.json({ message: 'Category is required', field: 'category' });
		}

		try {
			const updatedPost = await PostModel.findByIdAndUpdate(
				postId,
				updatedPostFields,
				{ new: true, runValidators: true }
			);
			res.json(updatedPost);
		} catch (validationError) {
			const validationErrors = Object.values(validationError.errors).map(
				(err) => err.message
			);
			return res.status(400).json({
				message: 'Validation error',
				errors: validationErrors,
			});
		}
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
});

//DeleTing a post

router.delete('/posts/:id', async (req, res) => {
	try {
		const postId = req.params.id;
		const deletedPost = await PostModel.findByIdAndDelete(postId);

		if (!deletedPost) {
			return res.status(404).json({ message: 'Post not found' });
		}

		res.json({ message: 'Post deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
});

//GetTing all Posts. Aplplied filter based on Category Field and sortby feature based on Date and Name.
router.get('/posts', async (req, res) => {
	try {
		const { category, sortBy, sortOrder } = req.query;
		const query = {};

		if (category) {
			query.category = category;
		}

		let sortOption = {};

		switch (sortBy) {
			case 'date':
				sortOption = { date: sortOrder === 'desc' ? -1 : 1 };
				break;
			case 'title':
				sortOption = { title: sortOrder === 'desc' ? -1 : 1 };
				break;
			default:
				sortOption = { date: sortOrder === 'desc' ? -1 : 1 };
		}

		const posts = await PostModel.find(query).sort(sortOption);

		res.json(posts);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
});

module.exports = router;
