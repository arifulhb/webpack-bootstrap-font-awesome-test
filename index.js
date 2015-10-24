// alert('WASK');

var $ = require('jquery');

// require('bootstrap-webpack!./bootstrap.config.js');

require('expose?$!expose?jQuery!jquery');

// require('bootstrap');
require("bootstrap-webpack");
require("font-awesome-webpack");
// require("fontawesome");
// require('./node_modules/font-awesome/css/font-awesome.css');

require('./resources/css/style.css');
// require('./node_modules/bootstrap/dist/css/bootstrap-theme.min.css');
// require('./node_modules/bootstrap/dist/css/bootstrap.min.css');


$('h1').html('<i class="fa fa-bars"></i> this is bootstrap');
console.log('WASK');
