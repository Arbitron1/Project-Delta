const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Reviews= require("../models/review.js");
const Listing=require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middlewares.js");
const reviewController=require("../controllers/reviews.js");


// const validateReview=(req,res,next)=>{
//     let {error}=reviewSchema.validate(req.body);
//       if(error){
//         let errMsg=error.details.map((el)=>el.message).join(",");
//         throw new ExpressError(400,errMsg);
//       }else{
//         next();
//           }
//   };


//Reviews 
//Post Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
  
  //Delete Review Route
  router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));
  
  // router.delete("/:id/:reviewId", wrapAsync(async (req, res) => {
  //   const listing = await Listing.findById(req.params.id);
  //   if (!listing) {
  //     req.flash("error", "Listing not found");
  //     res.redirect("/listings");
  //   } else {
  //     const review = await Reviews.findByIdAndDelete(req.params.reviewId);
  //     if (!review) {
  //       req.flash("error", "Review not found");
  //       res.redirect(`/listings/${req.params.id}`);
  //     } else {
  //       await Listing.findByIdAndUpdate(req.params.id, { $pull: { reviews: req.params.reviewId } });
  //       req.flash("success", "Review Deleted");
  //       res.redirect(`/listings/${req.params.id}`);
  //     }
  //   }
  // }));
  module.exports=router;