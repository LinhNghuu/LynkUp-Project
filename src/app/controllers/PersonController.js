const Person = require('../models/Person');

class SiteController {
  // [get] /Person/:slug
  show(req, res, next) {
    Person.findOne({ slug: req.params.slug }).then((person) => {
      res.render('person/show',{person});
    });
  }
}

module.exports = new SiteController();
