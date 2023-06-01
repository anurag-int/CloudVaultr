const express = require('express');
const router = express.Router();


const {localFileUpload, imageUpload} = require('../controllers/fileUpload.js');
// const imageUpload = require('../controllers/fileUpload.js');

// API Route
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);

module.exports = router;