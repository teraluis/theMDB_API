const router = require('express').Router();

const moviesInternDB = require('../controllers/movieDbController');

router.get('/', moviesInternDB.getAllMovies.bind(moviesInternDB));

router.get('/:id', moviesInternDB.getById.bind(moviesInternDB));

router.post('/movie', moviesInternDB.addMovie.bind(moviesInternDB));


module.exports = router;
