const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// connect db
const db = require('./config/db');
db.connect();

// set routes
const route = require('./routes');
// Set view engine
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'resources/views'));

// For serving static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// get route init
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Example app listening at http://localhost:${port}`);
});
