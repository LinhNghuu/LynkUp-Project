// Import the router modules for different parts of the application
const personRouter = require('./person');
const manageRouter = require('./manage');
const siteRouter = require('./site');

// Define a function to configure routes for an Express app
function route(app) {
  // Apply the personRouter to handle routes starting with '/person'
  app.use('/person', personRouter);

  // Apply the manageRouter to handle routes starting with '/manage'
  app.use('/manage', manageRouter);

  // Apply the siteRouter to handle all other routes starting from the root '/'
  app.use('/', siteRouter);
}

// Export the route function to be used in the main application file
module.exports = route;
