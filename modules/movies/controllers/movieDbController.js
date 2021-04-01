const Movie = require('../model/movieModel');

class MovieDbController {

    getById = async (req, res) => {
        const {id} = req.params;
        const movie = await Movie.find({movieIdAPI: Number(id)}).exec();
        const first = movie[0];
        return res.json({
            id: first.movieIdAPI,
            title: first.title,
            img: first.image
        });
    };

    addMovie = async (req, res) => {
        const {id, title, image} = req.body;
        const movie = new Movie({movieIdAPI: id, title: title, image: image});
        await movie.save();
        return res.json({
            id: movie.movieIdAPI,
            title: movie.title,
            img: movie.image
        });
    }

    getAllMovies = async (req, res) => {
        const {from = 0, limit = 5} = req.query;
        const [count, movies] = await Promise.all([
            Movie.countDocuments(),
            Movie.find({}, 'movieIdAPI title image').skip(Number(from))
                .limit(Number(limit))
                .exec()
        ]);
        return res.json({count, movies});
    }
}

module.exports = new MovieDbController();
