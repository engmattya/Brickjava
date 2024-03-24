const express = require('express');
const path = require('path');
const app = express();

// Assuming your game files are in a folder named 'public'
// Make sure the 'public' folder contains 'index.html', 'game.js', and any other assets
app.use(express.static(path.join(__dirname, 'public')));

// Set the port to the default Azure provides, or 3000 for local development
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
