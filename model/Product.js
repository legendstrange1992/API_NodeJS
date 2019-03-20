const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ProductSchema = new Schema({
	//_id:  mongoose.Types.ObjectId,
	id_theloai : Number,
	ten_theloai :  String,
	ten_theloai_khongdau :  String,
	anhien :  String,
});

module.exports  = mongoose.model('sanpham',ProductSchema);
