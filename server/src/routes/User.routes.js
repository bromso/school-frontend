import UserController from '../controllers/User.controller'

const routes = (app) => {
	app.post('/user', UserController.createUser)
}

export default {
	routes
}
