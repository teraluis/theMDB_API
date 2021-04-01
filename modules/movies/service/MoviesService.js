const axios = require('axios');

const logger = require('../../../utils/logger')

const Rand = require('../../../core/Rand');

class MoviesService {
    imgPath = 'https://image.tmdb.org/t/p/w500/';

    constructor({url, api_key}) {
        logger.info('Movies API init')
        this.request = axios.create({
            baseURL: url,
            timeout: 1000,
            params: this.params
        });
        this.params = {
            'api_key': api_key
        }
    }

    searchMovie(name = 'star wars') {
        this.params.query = name;
        return this.request.get('/search/movie', {
            params: this.params
        }).then(res => {
            return res.data.results.map(mov => ({
                id: mov.id,
                title: mov['original_title'],
                img: this.imgPath + mov['poster_path'],
                date: mov['release_date']
            }));
        }).catch((error) => {
            return {
                msg: error.message
            }
        })
    }

    getRandomMovie(latest) {
        const random = Rand.getRandomInt(latest);
        return this.getMovieById(random);
    }

    getMovieById(movieId) {
        return this.request.get(`/movie/${String(movieId)}`, {
            params: this.params
        }).then(res => {
            return {
                id: res.data.id,
                title: res.data.title,
                img: this.imgPath + res.data['poster_path'],
                date: res.data['release_date']
            }
        }).catch((error) => {
            return {
                msg: error.message
            }
        })
    }

    casting(movieId) {
        return this.request.get(`/movie/${String(movieId)}/credits`, {
            params: this.params
        }).then(res => {
            return res.data.cast.map(actor => ({
                name: actor.name,
                img: this.imgPath + actor['profile_path'],
                character: actor['character'],
                date: res.data['release_date']
            }))
        }).catch((error) => {
            return {
                msg: error.message
            }
        })
    }

    randomCasting(lastId) {
        const random = Rand.getRandomInt(lastId);
        return this.casting(random);
    }

    getLastMovieId() {
        return this.request.get(`/movie/latest`, {
            params: this.params
        }).then(res => {
            return {id: res.data.id, title: res.data.title, overview: res.data.overview};
        }).catch((error) => {
            return {
                msg: error.message
            }
        })
    }
}

module.exports = new MoviesService({
    url: process.env.URL,
    api_key: process.env.API_KEY
});
