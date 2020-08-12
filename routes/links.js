const {Router} = require('express');

const {getLinks, getLink, createLink, updateLink, deleteLink} = require('../controllers/links');

const router = Router();

router.route('/')
	.get(getLinks)
	.post(createLink);

router.route('/:id')
	.get(getLink)
	.put(updateLink)
	.delete(deleteLink);

module.exports = router;
