const DiaryEntry = require('../models/DiaryEntry');

// Get all diary entries
const getAllEntries = async (req, res) => {
  try {
    const entries = await DiaryEntry.find().sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    console.error('Error getting diary entries:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new diary entry
const createEntry = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newEntry = new DiaryEntry({
      title,
      content,
    });

    const entry = await newEntry.save();
    res.json(entry);
  } catch (error) {
    console.error('Error creating diary entry:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getAllEntries,
  createEntry,
};
