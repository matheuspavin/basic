const rest = require('../infra/rest');
const config = require('../config/config');

const getYears = function () {
    const request = {
        url: `${config.cars.host}getYears`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        json: true
    };
    console.log(request.url);
    return rest(request);
};

const getBrands = function (typeOfVehicle) {
    const request = {
        url: `${config.cars.host}${typeOfVehicle}/marcas`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        json: true
    };
    return rest(request);
};

const getCars = function (typeOfVehicle, brand) {
    const request = {
        url: `${config.cars.brands}${typeOfVehicle}/marcas/${brand}/modelos`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        json: true
    };
    return rest(request);
};


module.exports = {
    getYears,
    getBrands,
    getCars
};
