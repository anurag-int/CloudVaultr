const express = require('express');
const router = express.Router();


const localFileUpload = require('../controllers/fileUpload.js');

// API Route
router.post("/localFileUpload", localFileUpload);

module.exports = router;