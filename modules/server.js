const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const logger = require('../utils/logger');
const corsOptions = {origin: '*'};
const cors = require('cors');
const bodyParser = require('body-parser');
const opts = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true};
const db_PORT = process.env.DATABASE_PORT;
const db_NAME = process.env.DATABASE_NAME;
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.routes();
        mongoose.connect(`mongodb://localhost:${db_PORT}/${db_NAME}`,opts,(err, res) => {
            if(err) throw err;
            console.log("database online");
        });
    }

    routes() {
        this.app.use(cors(corsOptions));
        this.app.use(bodyParser.json({ type: 'application/json' }));

        this.app.get('/api', (req, res) => {
            res.send('welcome to the MDB API')
        });

        this.app.use('/api/auth', require('./authentification/routes/AuthRoutes'));

        this.app.use('/api/movies', require('./movies/routes/MoviesRoutes'));

        this.app.use('/intern/movies', require('./movies/routes/MoviesDbRoutes'));
    }

    listen() {
        this.app.listen(this.port, _ => logger.info(`Server listening on port ${this.port}`))
    }

    close() {
        const tmp = this.app;
        tmp.close()
    }
}

module.exports = new Server();
