const Person = require('../models/Person');

class ManageController {
  //[POST] /manage/store
  store(req, res, next) {
    const person = new Person(req.body);
    person.save()
      .then(() => res.redirect('/'))
      .catch(err => {
        console.log(err);
        res.status(500).render('404');  // Render your 500 Internal Server Error page
      });
  }
  //[GET] /manage/create
  create(req, res, next) {
    res.render('manage/create');
  }
  // [GET] /manage
  show(req, res, next) {
    // If you're planning to fetch some data, then handle the error like this
    // YourDatabaseModel.find({})
    //   .then(data => res.render('yourView', { data }))
    //   .catch(err => {
    //     console.log(err);
    //     res.status(404).render('404');  // Render your 404 page
    //   });
  }
}

module.exports = new ManageController();
