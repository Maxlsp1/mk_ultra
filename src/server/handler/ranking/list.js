const mongoose = require('mongoose');
const Rank = require('../../../model/rank')

async function ListTornament(){
	try {
		await mongoose.connect('mongodb://localhost:27017/mortal_kombat_tornament', {
			useUnifiedTopology: true, 
			poolSize: 20 ,
			useNewUrlParser: true
		})
		var res = await Rank.newRank().find({})
		await mongoose.disconnect()
		return res

	} catch (error) {
		console.log(error)
	}
}

module.exports = {"ListTornament": ListTornament}