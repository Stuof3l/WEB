const mongoose = require('mongoose');
// Each schema maps to a MongoDB collection 
// and defines the shape of the documents within that collection.
const Schema = mongoose.Schema;

const CampgoundSchema = new Schema({
    title: String,
    price: String,
    descripation: String,
    location: String
});

// export the module
module.exports = mongoose.model('Campground', CampgoundSchema);