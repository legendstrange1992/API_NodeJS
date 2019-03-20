const express = require('express');
const router = express.Router();
const TheLoaiModel = require('../model/Product');


router.get('/api/the-loai', async (req, res)=>{
	let data = await TheLoaiModel.find({}).exec();
	res.send(data);
})

module.exports = router;