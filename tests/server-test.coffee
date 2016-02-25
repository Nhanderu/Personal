'use strict'

# Import required modules.
server = require '../source'
chai =
    require 'chai'
        .expect
request =
    require 'co-supertest'
        .agent server 8000

describe 'index', ->

	it 'should respond 200 on GET "/"', ->
        response = yield
            request
                .get '/'
                .expect 200
                .end()