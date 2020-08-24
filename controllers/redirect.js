const ErrorResponse = require('../utils/error-response');
const asyncHandler = require('../middleware/async');

const Link = require('../models/Link');

// @desc      Get single link
// @route     GET /:id
// @access    Public
exports.getRedirect = asyncHandler(async (req, res, next) => {
	const link = await Link.findOne({ slug: req.params.slug });

	if (!link) {
		return next(new ErrorResponse(`Link not found with slug of ${req.params.slug}`, 404));
	}

	link.clicks++;

	await link.save();

	res.redirect(link.url);
});
