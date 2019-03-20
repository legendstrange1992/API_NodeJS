const express = require('express');
const ProductModel = require('../model/Product');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = express.Router();
//---------------------Upload Images-----------------------
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/anh')
  },
  filename: function (req, file, cb) {
    cb(null,Date.now() +'-'+ file.originalname   )
  }
})
var upload = multer({ storage: storage })
var anhs = [] ;

//---------------------Routes-----------------------
router.get('/',async (req,res) => {
	res.render('index');
});
router.get('/upload',(req,res) => {
	res.render('upload');
});

router.post('/uploadfile',upload.any(),function(req,res){
  req.files.forEach(function(item){
    anhs.push(item.filename);
  })
  console.log(anhs);
  res.status(200).send(req.files);
})
router.post('/upsanpham',urlencodedParser,async (req,res) => {
  console.log(req.body);
  anhs = [];
  console.log(anhs);
  res.send('thanh cong');
})


module.exports = router;