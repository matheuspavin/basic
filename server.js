const express = require('express');

const app = express();
const port = process.env.PORT || 4300;
const bodyParser = require('body-parser');

const clientsRoute = require('./server/routes/vehiclesRoute');

app.use(bodyParser.json({ limit: '50mb' }));
app.use('/client', express.static('client/'));

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    next();
});

app.get('/', (req, res) => {
    res.redirect('/client');
});

app.use('/clients', clientsRoute);

const errorHandler = function (err, req, res, next) {
    console.error('Error:', err);
    res.status(500).send({ message: 'server error' });
    next();
};

app.options('*', (req, res, next) => {
    res.end();
    next();
});

app.use(errorHandler);
app.listen(port);
console.log('API started on:' + port);
