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
        const {latest = 9000} = req.query;
        return MoviesService.getRandomMovie(latest)
            .then(movie => res.status(200).json(movie))
            .catch(next)
    }

    casting(req, res, next) {
        const {movieId} = req.params;
        return MoviesService.casting(movieId)
            .then(casting => res.status(200).json(casting))
            .catch(next)
    }

    randomCasting(req, res, next) {
        const {latest = 9000} = req.query;
        return MoviesService.randomCasting(latest)
            .then(casting => res.status(200).json(casting))
            .catch(next)
    }

    latestMovieId(req, res, next) {
        return MoviesService.getLastMovieId()
            .then(latest => res.status(200).json(latest))
            .catch(next)
    }
}

module.exports = new MoviesController();
