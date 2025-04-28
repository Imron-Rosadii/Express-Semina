const express = require("express");
const router = express();
const { createCMSOrganizers, createCMSUser } = require("./controller");

const { authenticateUser, authorizeRoles } = require("../../../middlewares/auth");

router.post("/organizers", createCMSOrganizers);
router.post("/users", authenticateUser, createCMSUser);

module.exports = router;
