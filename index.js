require('dotenv').config();
const server = require('./modules/server');

let srv = server.listen();

let close = () => {
    srv.close();
};

module.exports = srv;

module.exports = close;
