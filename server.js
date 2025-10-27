// --- Core setup ---
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json()); // Allow JSON requests (for React fetch calls)

// --- API routes ---
app.get('/api/hello', (req, res) => {
  console.log('✅ /api/hello route hit!');
  res.json({ message: 'Hello from Express backend 👋' });
});

// --- Serve React build files ---
const clientPath = path.join(__dirname, 'client', 'dist');
app.use(express.static(clientPath));

// --- Catch-all route for React frontend ---
// Send React index.html for any unknown route
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// --- Start server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

/*
    The main Node.js script that runs your web server.
    It uses Express to handle HTTP requests (routes). tells where to find templates (views/), and static files (public/).
    Decides how to respond when users visit different URLS
*/

