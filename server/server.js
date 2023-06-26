const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const diaryRoutes = require('./routes/diaryRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api/diary', diaryRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

