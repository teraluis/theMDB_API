const router = require('express').Router()

const moviesController = require('../controllers/moviesController');

router.get('/search', moviesController.searchMovie.bind(moviesController));

router.get('/random', moviesController.randomMovie.bind(moviesController));

router.get('/:movieId/casting', moviesController.casting.bind(moviesController));

router.get('/casting/random', moviesController.randomCasting.bind(moviesController));

router.get('/movie/latest', moviesController.latestMovieId.bind(moviesController));



module.exports = router;
