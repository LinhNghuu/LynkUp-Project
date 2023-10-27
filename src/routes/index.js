const personRouter = require('./person');
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  app.use('/person', personRouter);
  app.use('/news', newsRouter);

  app.use('/', siteRouter);
}
module.exports = route;
