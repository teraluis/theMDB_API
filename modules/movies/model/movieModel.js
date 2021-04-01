const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let MovieSchema = new Schema({

    movieIdAPI: {
        type: Number,
        unique: true,
        required: [true, 'movieIdAPI is mandatory']
    },
    title: {
        type: String,
        unique: false,
        required: [true, 'title is mandatory']
    },
    image: {
        type: String,
        unique: true,
        required: [true, 'title is mandatory']
    }
});

MovieSchema.methods.toJSON = function () {
    const { __v, _id, movieIdAPI, image, ...movie} = this.toObject();
    movie.id = movieIdAPI;
    movie.img = image;
    return movie;
};
MovieSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });
module.exports = mongoose.model('Movie', MovieSchema);
