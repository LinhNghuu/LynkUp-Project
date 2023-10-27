const Person = require('../models/Person');

class SiteController {
  //[get] /
  index(req, res) {
    Person.find({})
      .then((person) => {
        res.render('home',{
          person: person
        });
      })
      .catch((error) => {
        res.status(404).json({ error: 'error' });
      });
  }
  // [get] /search
  search(req, res) {
    res.send('news Details');
  }
}

module.exports = new SiteController();
