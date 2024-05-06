const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: "logErrFile.log", Level: 'error'}),
        new winston.transports.File({ filename: "logfile.log", Level: 'info'}),
    ]
});

//if not in prod log to console
if (process.env.NODE_ENV !== 'production'){
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

module.exports = logger;