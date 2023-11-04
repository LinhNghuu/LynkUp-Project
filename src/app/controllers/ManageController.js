const Person = require('../models/Person');

class ManageController {
  //[GET] /manage/create
  create(req, res, next) {
    res.render('manage/create');
  }

  //[POST] /manage/store
  store(req, res, next) {
    const person = new Person(req.body);
    person
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {
        console.error(error);
        res.status(500).render('404');
      });
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
    Person.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch((error) => {
        console.error(error);
        res.status(404).render('404');
      });
  }

  //[DELETE] /manage/force/:id
  forceDestroy(req, res, next) {
    Person.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch((error) => {
        console.error(error);
        res.status(404).render('404');
      });
  }

  //[GET] /manage/trash
  trash(req, res, next) {
    Person.findDeleted({})
      .sort({ date: -1 })
      .then((person) => {
        res.render('manage/trash', {
          person: person,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(404).render('404');
      });
  }

  //[PATCH] /manage/restore/:id
  restore(req, res, next) {
    Person.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch((error) => {
        console.error(error);
        res.status(404).render('404');
      });
  }
}

module.exports = new ManageController();
