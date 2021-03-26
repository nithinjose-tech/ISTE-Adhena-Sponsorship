const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/sponsors", shopController.getIndex);

module.exports = router;
