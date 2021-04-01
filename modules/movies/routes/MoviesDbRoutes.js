const router = require('express').Router();

const moviesInternDB = require('../controllers/movieDbController');

const { check } = require('express-validator');

const {validateFields} = require('../../../midelware/validFields');

const {MovieValidation} = require('../../../midelware/movieIdValidation');

router.get('/', moviesInternDB.getAllMovies.bind(moviesInternDB));

router.get('/:id', moviesInternDB.getById.bind(moviesInternDB));

router.post('/movie/validate',
    [
        check('id').custom((id) => MovieValidation.uniqueId(id)),
        check('img').custom((img) => MovieValidation.uniqueImg(img)),
        check('title').custom((title) => MovieValidation.uniqueTitle(title)),
        validateFields
    ],
    moviesInternDB.addMovie.bind(moviesInternDB));

router.post('/movie', moviesInternDB.addMovie.bind(moviesInternDB));


module.exports = router;
