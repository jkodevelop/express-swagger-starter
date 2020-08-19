const basic = require('./basic.js');
const post  = require('./post.js');
const fileio= require('./fileio.js');
const authentication= require('./authentication.js');

module.exports = routeConfig = (app) => {
  app.use('/api', basic);
  app.use('/api', post);
  app.use('/api', fileio);
  app.use('/api', authentication);
}