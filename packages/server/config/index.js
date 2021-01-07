import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabase = async () => {
	try {
		const DB_URL = process.env.DATABASE_URL
		await mongoose.connect(DB_URL)
		console.log('Successfully connected to the database')
	} catch (error) {
		console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
		process.exit()
	}
}

const connectToPort = (app) => {
	const port = process.env.PORT
	app.listen(port, () => {
		console.log(`SERVER IS WORKING & AVAILABLE ON PORT: ${port}`)
	})
}

export default {
	connectToDatabase,
	connectToPort
}
