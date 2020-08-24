const {Schema, model, Types} = require('mongoose');

const LinkSchema = new Schema({
	url: {
		type: String,
		trim: true,
		required: [true, 'Please add a url'],
		match: [
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
			'Please use a valid URL with HTTP or HTTPS',
		],
	},
	slug: {
		type: String,
		trim: true,
		required: [true, 'Please add a slug'],
		unique: true,
		minlength: [5, 'Slug can not be less than 5 characters'],
		maxlength: [15, 'Slug can not be more than 15 characters'],
	},
	date: {
		type: Date,
		default: Date.now,
	},
	clicks: {
		type: Number,
		default: 0,
	},
	owner: {
		type: Types.ObjectId,
		ref: 'User',
	},
});

module.exports = model('Link', LinkSchema);
