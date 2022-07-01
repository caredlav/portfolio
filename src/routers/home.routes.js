const express = require("express");
const router = express.Router();
const navigationController = require("../controllers/navigationController");

router.get("/", navigationController.getHome);

router.get("/works", navigationController.getWorks);

router.get("/about", navigationController.getAbout);

router.get("/contact", navigationController.getContact);

module.exports = router;