const express = require("express");
const router = express.Router();
const { contactForm } = require("../controllers/contact");

router.post("/contact", contactForm);

module.exports = router;
