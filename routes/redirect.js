const {Router} = require('express');

const {getRedirect} = require('../controllers/redirect');

const router = Router();

router.route('/:slug')
	.get(getRedirect);

module.exports = router;
