'use strict'

# Imports required modules.
server = require '../source'
chai =
    require 'chai'
        .expect
request =
    require 'co-supertest'
        .agent server 8000
        
# Imports the definitions.
definitions = require '../../definitions.json'
folders = definitions.folders
routes = definitions.routes

# Index page.
describe 'index', ->

	it 'should respond 200 on GET "/"', ->
        response = yield
            request
                .get '/'
                .expect 200
                .end()

# Portuguese page.
describe 'portuguese', ->
    
    path = routes.portuguese.index
    
    it "should respond 200 on GET \"#{path}\" (portuguese index)", ->
        response = yield
            request
                .get path
                .expect 200
                .end()

# English page.
describe 'english', ->
        
    path = routes.english.index
    
    it "should respond 200 on GET \"#{path}\" (english index)", ->
        response = yield
            request
                .get path
                .expect 200
                .end()