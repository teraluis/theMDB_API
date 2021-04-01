const router = require('express').Router()

const moviesController = require('../controllers/moviesController');

router.get('/:id', moviesController.getMovie.bind(moviesController));

router.get('/:id/casting', moviesController.casting.bind(moviesController));

router.get('/movie/latest', moviesController.latestMovieId.bind(moviesController));

router.get('/movie/random', moviesController.randomMovie.bind(moviesController));

router.get('/casting/random', moviesController.randomCasting.bind(moviesController));

router.get('/search', moviesController.searchMovie.bind(moviesController));

module.exports = router;
