import mongoose from 'mongoose'

const connectToDatabase = async () => {
	try {
		await mongoose.connect('mongodb://localhost/recipedb', {useNewUrlParser: true, useUnifiedTopology: true})
		console.log('Successfully connected to the database')
	} catch (error) {
		console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
		process.exit()
	}
}

export default {
	connectToDatabase
}
