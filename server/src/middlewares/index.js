const errorHandler = (error, req, res, next) => {
	const statuscode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statuscode)
	res.json({
		statuscode: statuscode,
		message: error.message,
		stacktrace: error.stack,
	})
}

const notFound = (req, res, next) => {
	const error = new Error(`Not Found: ${req.originalUrl}`)
	res.status(404)
	next(error)
}

export default {
	notFound,
	errorHandler
}
