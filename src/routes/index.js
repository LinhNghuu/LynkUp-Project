const personRouter = require('./person');
const manageRouter = require('./manage');
const siteRouter = require('./site');

function route(app) {
  app.use('/person', personRouter);
  app.use('/manage', manageRouter);

  app.use('/', siteRouter);
}
module.exports = route;
