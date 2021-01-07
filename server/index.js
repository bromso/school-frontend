import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import middlewares from './src/middlewares/index.js'
import Configuration from './config/index.js'

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
	res.send('Pancakes')
})

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()

app.listen(port, () => {
	console.log(`Server is working and available on port ${port}`)
})
