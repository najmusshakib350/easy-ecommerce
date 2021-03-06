const express = require("express");
const {
  getCheckoutSession,
  createPurchase,
  getPurchase,
  getAllPurchase,
  updatePurchase,
  deletePurchase,
} = require("./../controllers/paymentcontroller");
const { protect, restrictTo } = require("../controllers/authController");
const router = express.Router();

router.use(protect);
router.get("/checkout-session/", protect, getCheckoutSession);

router.use(restrictTo("admin"));

router.route("/").get(getAllPurchase).post(createPurchase);

router
  .route("/:id")
  .get(getPurchase)
  .patch(updatePurchase)
  .delete(deletePurchase);

module.exports = router;
