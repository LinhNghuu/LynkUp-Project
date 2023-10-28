const Person = require('../models/Person');

class SiteController {
  //[get] /
  index(req, res) {
    Person.find({})
      .sort({ date: -1 })  // Sort by date in descending order
      .then((person) => {
        res.render('home', {
          person: person
        });
      })
      .catch((error) => {
        console.error(error);  // Log the error for debugging
        res.status(404).render('404');  // Render your 404 view
      });
  }
  // [get] /search
  search(req, res) {
    res.send('news Details');
  }
}

module.exports = new SiteController();
