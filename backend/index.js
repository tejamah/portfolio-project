const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount API route
app.use('/api/contact', contactRoutes);

// Health check (optional)
app.get('/', (req, res) => {
  res.send('Portfolio backend is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
