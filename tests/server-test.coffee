'use strict'

server = require '../source/index'
chai =
    require 'chai'
        .expect
request =
    require 'co-supertest'
        .agent server.listen()

#chai.use http 
#expect = chai.expect

describe 'index', ->
	it 'should respond 200 on "/" GET', ->
        response = yield
            request
                .get '/'
                .expect 200
                .end()
        yield undefined
###
		chai.request server 
			.get '/'
			.end (err, res) ->
				(expect err).to.not.exist
				(expect res).to.have.status 200
				done()
###