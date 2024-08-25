const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/WrapAsync");

const { validateReview, isLoggedIn, isreviewAuthor } = require("../middleware");
const reviewController = require("../controllers/reviews");
// Post Review Route

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);
// Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isreviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
