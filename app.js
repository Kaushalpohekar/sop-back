const express = require('express');
const cors = require('cors');
const router = require('./routes');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(cors());

// Increase payload size limit to 100MB for both JSON and URL-encoded data
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// Use the router for handling routes
app.use(router);

const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
