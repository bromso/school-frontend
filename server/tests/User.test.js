import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import app from '../index.js'
import StatusCode from '../config/StatusCode.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const userId = '5ff77809cdd43d972dfcef4e'
const user = {
	username: randomString,
	password: randomString,
}

const testingNoneExistentRoute = () => {
	describe('Testing a route that does not exist', () => {
		test('Expecting 404 not found', (done) => {
			Chai.request(app)
				.get(`/${randomString}`)
				.end((request, response) => {
					response.should.have.a.status(StatusCode.NOT_FOUND)
					done()
				})
		})
	})
}

const createUser = () => {
	describe('Testing CREATE(POST) method for user entity', () => {
		test('Expecting a user to be created', (done) => {
			Chai.request(app)
				.post('/user')
				.send(user)
				.end((error, response) => {
					response.should.have.a.status(StatusCode.CREATED)
					response.body.should.be.a('object')
					response.body.should.have.property('username').eq(user.username)
					response.body.should.have.property('password').eq(user.password)
					done()
				})
		})
	})
}



describe('TEST THE USER_API ROUTE', () => {
	testingNoneExistentRoute()
	createUser()
})
