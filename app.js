const express = require('express');
const cors = require('cors');
const router = require('./routes');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(cors());

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

app.use(router);

const port = 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
