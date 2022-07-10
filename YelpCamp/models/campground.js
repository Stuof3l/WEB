const mongoose = require('mongoose');
const Review = require('./review');
// Each schema maps to a MongoDB collection 
// and defines the shape of the documents within that collection.
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
})
// use mongoose virtuals to change the url to get thumbnail
// Virtuals are document properties that do not persist or get stored in the MongoDB database, they only exist logically and are not written to the document’s collection.
// Setting virtual property using get method
// cloudinary API
ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
})

const CampgoundSchema = new Schema({
    title: String,
    images: [ImageSchema],
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

// Delete reviews when deleting pages
CampgoundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.remove({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

// export the module
module.exports = mongoose.model('Campground', CampgoundSchema);