'use strict'

chai = require 'chai'
request = require 'supertest'
server = require '../source/index'

#chai.use http 
#expect = chai.expect

describe 'index', ->
	it 'should respond 200 on "/" GET', (done) ->
		request server
			.get '/'
			.expect(200)
###
		chai.request server 
			.get '/'
			.end (err, res) ->
				(expect err).to.not.exist
				(expect res).to.have.status 200
				done()
###