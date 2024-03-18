const express = require("express");
const router = express.Router();
const contentCtrl = require("../../controllers/content");

router.get("/new", contentCtrl.new);