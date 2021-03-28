const express = require('express');
const logger = require('../utils/logger');
const corsOptions = {origin: '*'};
const cors = require('cors');
const bodyParser = require('body-parser');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.routes();
    }

    routes() {
        this.app.use(cors(corsOptions));
        this.app.use(bodyParser.json({ type: 'application/json' }));

        this.app.get('/api', (req, res) => {
            res.send('welcome to the MDB API')
        })
        this.app.use('/api/auth', require('./authentification/routes/AuthRoutes'));

        this.app.use('/api/movies', require('./movies/routes/MoviesRoutes'));
    }

    listen() {
        this.app.listen(this.port, _ => logger.info(`Server listening on port ${this.port}`))
    }
}

module.exports = new Server();
