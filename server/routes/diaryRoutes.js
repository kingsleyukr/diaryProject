const express = require('express');
const router = express.Router();
const diaryController = require('../controllers/diaryController');

// GET all diary entries
router.get('/', diaryController.getAllEntries);

// POST create new diary entry
router.post('/', diaryController.createEntry);

module.exports = router;
