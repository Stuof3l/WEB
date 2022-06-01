const mongoose = require('mongoose');
// Each schema maps to a MongoDB collection 
// and defines the shape of the documents within that collection.
const Schema = mongoose.Schema;

const CampgoundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

// export the module
module.exports = mongoose.model('Campground', CampgoundSchema);