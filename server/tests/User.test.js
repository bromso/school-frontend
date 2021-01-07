import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import app from '../index.js'
import StatusCode from '../config/StatusCode.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)

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

describe('TEST THE USER_API ROUTE', () => {
	testingNoneExistentRoute()
})
