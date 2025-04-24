const express = require("express");
const router = express();
const { createCMSOrganizers } = require("./controller");

router.post("/organizers", createCMSOrganizers);

module.exports = router;
