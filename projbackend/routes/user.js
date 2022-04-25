const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  userPurchaseList,
} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

//PUT REQUEST for databse updation
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
//Using populate for other collections
router.get("/orders/user/:userId", isSignedIn, userPurchaseList);

module.exports = router;
