const Person = require('../models/Person');

class ManageController {
  //[POST] /manage/store
  store(req, res, next) {
    const person = new Person(req.body);
    person
      .save()
      .then(() => res.redirect('/'))
      .catch((err) => {
        console.log(err);
        res.status(500).render('404');
      });
  }
  //[GET] /manage/create
  create(req, res, next) {
    res.render('manage/create');
  }
  //[GET] /manage/store
  manage(req, res, next) {
    Person.find({})
      .sort({ date: -1 })
      .then((person) => {
        res.render('manage/store', {
          person: person,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(404).render('404');
      });
  }
  //[GET] /manage/edit/:id
  edit(req, res, next) {
    Person.findById(req.params.id)
      .then((person) => {
        res.render('manage/edit', {
          person: person,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(404).render('404');
      });
  }
  //[PUT] /manage/:id
  update(req, res, next) {
    // Trim the status and description fields before updating
    if (req.body.status) {
      req.body.status = req.body.status.trim();
    }
    if (req.body.description) {
      req.body.description = req.body.description.trim();
    }
    Person.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/manage/store'))
      .catch((error) => {
        console.error(error);
        res.status(404).render('404');
      });
  }
  //[DELETE] /manage/:id
  destroy(req, res, next) {
    Person.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch((error) => {
        console.error(error);
        res.status(404).render('404');
      });
  }
}

module.exports = new ManageController();
