const axios = require('axios');
const logger = require('../../../utils/logger')

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

    getRandomMovie() {
        const random = this.getRandomInt(9000) + 1;
        return this.request.get(`/movie/${String(random)}`, {
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

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    casting() {

    }
}

module.exports = new MoviesService({
    url: process.env.URL,
    api_key: process.env.API_KEY
});
