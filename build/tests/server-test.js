'use strict';
var chai, request, server;

chai = require('chai');

request = require('supertest');

server = require('../source/index');

describe('index', function() {
  return it('should respond 200 on "/" GET', function(done) {
    return request(server).get('/').expect(200);
  });
});


/*
		chai.request server 
			.get '/'
			.end (err, res) ->
				(expect err).to.not.exist
				(expect res).to.have.status 200
				done()
 */
