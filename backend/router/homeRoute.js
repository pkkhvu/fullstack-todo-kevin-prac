const express = require("express");
const homeRouter = express.Router();
const homeController = require("../controllers/homeController");

homeRouter.post("/signup", homeController.signUp)
homeRouter.post("/login", homeController.login)
homeRouter.put("/updateFirstName", homeController.updateFirstName)
homeRouter.delete("/deleteUser", homeController.deleteUser)


module.exports = {homeRouter};
