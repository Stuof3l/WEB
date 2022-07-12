const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random100 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 100) + 20;
        const camp = new Campground({
            // added manually, should be changed in new data base
            author: "62c777d5d78364a8cac50a5c",
            location: `${cities[random100].city}, ${cities[random100].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis nulla voluptates. Rem, inventore quisquam enim magnam tempore ea corrupti mollitia exercitationem, beatae quos perspiciatis pariatur! Aliquid id nisi ducimus!",
            price: price,
            geometry: {
                type: "Point",
                coordinates: [-73.9866, 40.7306]
            },
            images: [
                {
                    url: "https://res.cloudinary.com/stuof3l/image/upload/v1657323354/YelpCamp/amufllaeerrwjmuxmvar.jpg",
                    filename: "YelpCamp/amufllaeerrwjmuxmvar",
                },
                {
                    url: "https://res.cloudinary.com/stuof3l/image/upload/v1657323355/YelpCamp/qoqul7pu1kp23rtxmnqj.jpg",
                    filename: "YelpCamp/qoqul7pu1kp23rtxmnqj",
                },
                {
                    url: "https://res.cloudinary.com/stuof3l/image/upload/v1657323355/YelpCamp/p7di3pqe0w72x3jbgfjy.jpg",
                    filename: "YelpCamp/p7di3pqe0w72x3jbgfjy",
                }
            ]
        })
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});
