const Course = require('../models/Courses');

class SiteController {
  //[get] /
  index(req, res) {
    Course.find({})
      .then((courses) => {
        res.json(courses);
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
