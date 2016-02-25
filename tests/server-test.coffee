'use strict'

# Import required modules.
server = require '../source/index'
chai =
    require 'chai'
        .expect
request =
    require 'co-supertest'
        .agent server.listen()

describe 'index', ->

	it 'should respond 200 on GET "/"', ->
        response = yield
            request
                .get '/'
                .expect 200
                .end()