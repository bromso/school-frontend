import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

dotenv.config()
const app = express()

app.use(helmet())
app.use(morgan('common'))
// app.use(isAuthenticated)


const port = process.env.PORT

app.get('/recipe', (req, res) => {
	res.send('Pancakes')
})

app.get('/user', isAuthenticated, (req, res) => {
})

app.use(notFound)
app.use(errorHandler)

function isAuthenticated(req, res, next) {
	req.query.admin === 'true'
		? res.send('You are admin')
		: res.send('You cannot make calls to this API URL')
	next()
}

function notFound(req, res, next) {
	const error = new Error(`Not Found: ${req.originalUrl}`)
	res.status(404)
	next(error)
}

function errorHandler(error, req, res, next) {
	const statuscode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statuscode)
	res.json({
		statuscode: statuscode,
		message: error.message,
		stacktrace: error.stack,
	})
}

app.listen(port, () => {
	console.log(`Server is working and available on port ${port}`)
})
