const axios = require('axios');

class AuthService {
    constructor({url, api_key}) {
        this.request = axios.create({
            baseURL: url,
            timeout: 1000,
            params: this.params
        });
        this.params = {
            'api_key': api_key
        }
    }

    guestSession() {
        return this.request.get('/guest_session/new', {
            params: this.params
        }).then(res => {
            return res.data
        }).catch((error) => {
            return {
                msg: error.message
            }
        })
    }

    newToken() {
        return this.request.get('/token/new', {
            params: this.params
        }).then(res => {
            return res.data
        }).catch((error) => {
            return {
                msg: error.message
            }
        })
    }

    createSession(req, res) {
        return this.request.post('/session/new', {
            params: this.params,
            body: {
                "request_token": res.body.token
            }
        }).then(res => {
            return res.data
        }).catch((error) => {
            return {
                msg: error.message
            }
        })
    }
}

module.exports = new AuthService({
    url: process.env.URL + '/authentication',
    api_key: process.env.API_KEY
});
