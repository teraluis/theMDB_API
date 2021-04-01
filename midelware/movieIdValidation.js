const Movie = require('../modules/movies/model/movieModel');

const uniqueId = async (movieId = '') => {
    const exits = await Movie.findOne({movieIdAPI: movieId});
    if (exits){
        throw new Error(`${movieId} already exits`);
    }
};

const uniqueImg = async (img = '') => {
    const exits = await Movie.findOne({image: img});
    if (exits){
        throw new Error(`${img} already exits`);
    }
};

const uniqueTitle = async (title = '') => {
    const exits = await Movie.findOne({title: title});
    if (exits){
        throw new Error(`${title} already exits`);
    }
};

module.exports = {uniqueId, uniqueImg, uniqueTitle};
