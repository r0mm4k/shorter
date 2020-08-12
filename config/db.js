const mongoose = require('mongoose');

const connetcDB = async () => {
	const connect = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	});

	console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline.bold);
};

module.exports = connetcDB;