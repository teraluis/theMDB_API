const MoviesService = require('../service/MoviesService');

class MoviesController {

    searchMovie(req, res, next) {
        return MoviesService.searchMovie(req.query.name)
            .then(movies => {
                res.status(200).json(movies)
            })
            .catch(next)
    }

    randomMovie(req, res, next) {
        return MoviesService.getRandomMovie()
            .then(movie => res.status(200).json(movie))
            .catch(next)
    }

}

module.exports = new MoviesController();
