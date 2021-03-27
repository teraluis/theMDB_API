const winston = require('winston')
const colorizer = winston.format.colorize()

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'debug',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => `${colorizer.colorize(info.level, `${info.timestamp} [${info.level}]: ${info.message}`)} - ${JSON.stringify(info)}`)
    ),
    defaultMeta: { service: 'THEMDB' },
    transports: [
        new winston.transports.Console(),
    ],
})

module.exports = logger
