const express = require("express");

const subjectControllers = require("../controllers/subject-controllers");

const router = express.Router();

router.get("/search", subjectControllers.getData);

module.exports = router;
