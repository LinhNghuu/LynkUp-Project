const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'resources/views'));

// For serving static files (if any)
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Example app listening at http://localhost:${port}`);
});
