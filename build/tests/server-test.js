'use strict';
var chai, request, server;

server = require('../source/index');

chai = require('chai').expect;

request = require('co-supertest').agent(server.listen());

describe('index', function() {
  return it('should respond 200 on "/" GET', function*() {
    var response;
    response = (yield request.get('/').expect(200).end());
    return (yield void 0);
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
