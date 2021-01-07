import UserModel from '../models/User.model'
import body from '../models/User.model'

const createUser = async (req, res) => {
	const user = new UserModel({
		username: req.body.username,
		password: req.body.password
	})

	try {
		const response = user.save()
		response.status(201).send(response)
	} catch (error) {
		res.status(500).send({message: error.message})
	}
}

export default {
	createUser
}
