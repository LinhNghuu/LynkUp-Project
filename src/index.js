const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// connect db
const db = require('./config/db');
db.connect();
// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// set routes
const route = require('./routes');
// Set view engine
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'resources','views'));

// For serving static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// get route init
route(app);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`App listening at http://localhost:${port}`);
});
