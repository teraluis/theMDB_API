const router = require('express').Router()

const moviesController = require('../controllers/moviesController');

router.get('/search', moviesController.searchMovie.bind(moviesController));

router.get('/random', moviesController.randomMovie.bind(moviesController));

module.exports = router;
