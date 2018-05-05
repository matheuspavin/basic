// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
    vehicleId: Schema.Types.ObjectId,
    brand: String,
    year: {
        type: Number, min: 1940, max: 2200, required: true
    },
    model: String,
    specifications: Object
});
