const MoviesService = require('../service/MoviesService');
const lastId = process.env.latests || 10000;
class MoviesController {

    searchMovie(req, res, next) {
        return MoviesService.searchMovie(req.query.name)
            .then(movies => {
                res.status(200).json(movies)
            })
            .catch(next)
    }

    getMovie(req, res, next) {
        const {id} = req.params;
        return MoviesService.getMovieById(id)
            .then(movie => res.status(200).json(movie))
            .catch(next)
    }

    randomMovie(req, res, next) {
        const {latest = lastId} = req.query;
        return MoviesService.getRandomMovie(latest)
            .then(movie => res.status(200).json(movie))
            .catch(next)
    }

    casting(req, res, next) {
        const {id} = req.params;
        return MoviesService.casting(id)
            .then(casting => res.status(200).json(casting))
            .catch(next)
    }

    randomCasting(req, res, next) {
        const {latest = lastId} = req.query;
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
