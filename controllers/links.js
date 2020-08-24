const ErrorResponse = require('../utils/error-response');
const asyncHandler = require('../middleware/async');

const Link = require('../models/Link');

// @desc			Get all links
// @route     GET /api/v1/links
// @access		Private
exports.getLinks = asyncHandler(async (req, res, next) => {
	const links = await Link.find();
	res.json({success: true, count: links.length, data: links});
});

// @desc      Get single link
// @route     GET /api/v1/links/:id
// @access    Private
exports.getLink = asyncHandler(async (req, res, next) => {
		const link = await Link.findById(req.params.id);

		if (!link) {
			return next(new ErrorResponse(`Link not found with id of ${req.params.id}`, 404));
		}

		res.json({success: true, data: link});
});

// @desc			Create new link
// @route     POST /api/v1/links
// @access		Private
exports.createLink = asyncHandler(async (req, res, next) => {
		const link = await Link.create(req.body);
		res.status(201).json({success: true, data: link});
});

// @desc			Update link
// @route     PUT /api/v1/links/:id
// @access		Private
exports.updateLink = asyncHandler(async (req, res, next) => {
		const link = await Link.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

		if (!link) {
			return next(new ErrorResponse(`Link not found with id of ${req.params.id}`, 404));
		}

		res.json({success: true, data: link});
});

// @desc			Delete link
// @route     DELETE /api/v1/links/:id
// @access		Private
exports.deleteLink = asyncHandler(async (req, res, next) => {
		const link = await Link.findByIdAndDelete(req.params.id);

		if (!link) {
			return next(new ErrorResponse(`Link not found with id of ${req.params.id}`, 404));
		}

		res.json({success: true, data: {}});
});
