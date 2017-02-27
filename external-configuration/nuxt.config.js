const config = require('config');
const backend = config.get('apiBackend');

module.exports = {
  env: backend
}