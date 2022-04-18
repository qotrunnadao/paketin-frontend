const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/v1',
        createProxyMiddleware({
            target: 'https://sandbox-paketin.herokuapp.com',
            changeOrigin: true
        })
    )
}
