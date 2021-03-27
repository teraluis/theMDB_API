const router = require('express').Router()

const authController = require('../controllers/AuthController');

router.get('/guest', authController.guestSession.bind(authController));

router.get('/token', authController.getToken.bind(authController));

module.exports = router;
