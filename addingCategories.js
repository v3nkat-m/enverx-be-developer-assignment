require('./config/mongoDB');
const categoryModel = require('./models/category');

let predefinedTags = [
	'Family',
	'Health',
	'Relationships',
	'Sexuality',
	'Home',
	'Food',
	'Pets',
	'Mental Health',
	'Productivity',
	'Mindfulness',
	'Business',
	'Marketing',
	'Leadership',
	'Artificial Intelligence',
	'Blockchain',
	'Data Science',
	'Gadgets',
	'Makers',
	'Security',
	'Tech Companies',
	'Design',
	'Product Management',
	'Programming',
	'Programming Languages',
	'Dev Ops',
	'Operating Systems',
	'Writing',
	'Art',
	'Gaming',
	'Humor',
	'Movies',
	'Music',
	'News',
	'Photography',
	'Podcasts',
	'Television',
	'Economics',
	'Education',
	'Equality',
	'Finance',
	'Law',
	'Transportation',
	'Politics',
	'Race',
	'Science',
	'Mathematics',
	'Drugs',
	'Phiosophy',
	'Religion',
	'Fashion',
	'Beauty',
	'Language',
	'Sports',
	'Travel',
	'Nature',
];

Promise.all(
	predefinedTags.map(async (category) => {
		let newCategory = new categoryModel({ name: category, posts: [] });
		await newCategory.save();
	})
)
	.then(() => {
		console.log('Categories added successfully.');
	})
	.catch((error) => {
		console.error('Error occurred while adding categories:', error);
	});
