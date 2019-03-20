const express =  require('express');
const app = express();
const router = require('./Route/route.js');
const router_api = require('./api/api.routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./views');
var Product = require('./model/Product'); 

let uri = 'mongodb://legendstrange1992:Ky776041164@ds149365.mlab.com:49365/shop';

mongoose.connect(uri,{ useNewUrlParser:true, });

var connection = mongoose.connection;
connection.on('open', async () => {
console.log('ket noi mongoDB mLab thanh cong');

app.use(router);
app.use(router_api);
});


module.exports = app;
