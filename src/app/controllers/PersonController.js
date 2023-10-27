const Person = require('../models/Person');

class SiteController {
  // [get] /Person/:slug
  show(req, res) {
    res.send('Person Details');
  }
}

module.exports = new SiteController();
