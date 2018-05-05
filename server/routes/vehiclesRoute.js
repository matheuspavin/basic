const router = require('express').Router();
const vehiclesService = require('../services/vehiclesService');

router.get('/years', async (req, res) => {
    const result = await vehiclesService.getYears();
    return res.json(result);
});

// router.get('/brands/models', async function (req, res, next) {
//     const type = req.query.type;
//     const brand = req.query.brand;
//     const result = await vehiclesService.getCars(type, brand);
//     return res.json(result);
// });


module.exports = router;
