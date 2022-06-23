const express = require('express');
const router = express.Router({mergeParams: true});
const Campground = require('../models/campground');
const Review = require("../models/review");
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');

const expressError = require('../utils/expressError');
const catchAsync = require('../utils/catchAsync');


router.post('/', isLoggedIn, validateReview, catchAsync(async(req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'Successfully create a new review!');
    res.redirect(`/campgrounds/${campground._id}`);
}))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(async(req, res)=>{
    const { id, reviewId } = req.params;
    // The $pull operator removes from an existing array all instances of a value or values that match a specified condition.
    // https://www.mongodb.com/docs/manual/reference/operator/update/pull/#mongodb-update-up.-pull
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted review');
    res.redirect(`/campgrounds/${id}`);
})) 

module.exports = router;