const axios = require('axios');
/*
    The authentication service can be used to validate a TMDb user login
    With a request token in hand, forward your user to the following URL:
    https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}
    You can also pass this URL a redirect_to parameter, ie:
    https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://www.yourapp.com/approved
 */
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

}

module.exports = new AuthService({
    url: process.env.URL + '/authentication',
    api_key: process.env.API_KEY
});
