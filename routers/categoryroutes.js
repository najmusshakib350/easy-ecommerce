const express = require("express");
const {
  createCategory,
  findAllCategory,
  deleteCategory,
  findOneCategory,
  updateCategory,
} = require("./../controllers/categorycontroller");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/:id")
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    deleteCategory
  );
router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    findAllCategory
  );
router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    findOneCategory
  );
router
  .route("/:id")
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    updateCategory
  );
router
  .route("/create")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    createCategory
  );

module.exports = router;
