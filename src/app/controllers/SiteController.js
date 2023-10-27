class SiteController {
  //[get] /
  index(req, res) {
    res.render('home');
  }
  // [get] /search
  search(req, res) {
    res.send('news Details');
  }
}

module.exports = new SiteController();
