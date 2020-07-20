
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://10.168.65.147:8099',
    // target: 'http://localhost:8080'
  }));

};