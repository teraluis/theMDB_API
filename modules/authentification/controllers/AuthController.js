const AuthService = require('../service/AuthService');

class AuthController {

    guestSession(req, res, next) {
        return AuthService.guestSession()
            .then(guess => res.status(200).json(guess))
            .catch(next)
    }

    getToken(req, res, next) {
        return AuthService.newToken()
            .then(token => res.status(200).json(token))
            .catch(next)
    }
}

module.exports = new AuthController();
