var path = require('path');
var config = require('config');
const { UI_PORT } = config;

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: UI_PORT,
  }
};