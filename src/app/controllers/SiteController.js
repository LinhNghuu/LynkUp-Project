const Person = require('../models/Person');
const authData = require('../models/auth-service');

class SiteController {
  // [GET] / - Home page
  index(req, res) {
    const isLoggedIn = req.session.user ? true : false; // Check if user is logged in
    Person.find({})
      .sort({ date: -1 }) // Sort by date in descending order
      .then((person) => {
        res.render('home', {
          person: person,
          isLoggedIn: isLoggedIn, // Pass isLoggedIn to the view
        });
      })
      .catch((error) => {
        console.error(error); // Log the error for debugging
        res.status(404).render('404');
      });
  }
  // [GET] /search
  search(req, res) {
    res.send('news Details');
  }
  // [GET] /login
  login(req, res) {
    const isLoggedIn = req.session && req.session.user ? true : false;
    res.render('login', {
      errorMessage: null,
      isLoggedIn: isLoggedIn, // Include isLoggedIn in the rendering context
    });
  }

  // [GET] /register - Show registration form
  register(req, res) {
    const isLoggedIn = req.session && req.session.user ? true : false;
    res.render('register', {
      errorMessage: null,
      isLoggedIn: isLoggedIn, // Include isLoggedIn in the rendering context
    });
  }
  // [POST] /register - Handle registration form submission
  registerUser(req, res) {
    authData
      .registerUser(req.body)
      .then(() => {
        res.render('register', {
          successMessage: 'User registered successfully',
        });
      })
      .catch((err) => {
        res.render('register', { errorMessage: err });
      });
  }
  // [POST] /login
  loginPost(req, res) {
    authData
      .checkUser({
        userName: req.body.username,
        password: req.body.password,
      })
      .then((user) => {
        // Login successful, redirect or set session as needed
        req.session.user = user;
        res.redirect('/'); // Redirect to a dashboard or home page
      })
      .catch((err) => {
        // Login failed, render login page with error message
        res.render('login', { errorMessage: err, username: req.body.username });
      });
  }
    // [GET] /logout - Handle user logout
  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).send('Error logging out');
      }
      res.redirect('/'); // or '/login', depending on your preference
    });
  }
  
}

module.exports = new SiteController();
