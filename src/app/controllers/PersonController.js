const Person = require('../models/Person');

class PersonController {
  // [get] /Person/:slug
  show(req, res, next) {
    Person.findOne({ slug: req.params.slug })
      .then((person) => {
        if (person) {
          res.render('person/show', { person });
        } else {
          // Render the 404 page if the person is not found
          res.status(404).render('404');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // You might also want to render the 404 page in case of an error
        res.status(404).render('404');
      });
  }
}

module.exports = new PersonController();
