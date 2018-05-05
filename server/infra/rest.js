const request = require('request');

module.exports = function (options) {
    options.gzip = true;
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                return reject(error);
            }
            if (response && (response.statusCode !== 200 && response.statusCode !== 201 && response.statusCode !== 204)) {
                return reject(body);
            }
            return resolve(body);
        });
    });
};
