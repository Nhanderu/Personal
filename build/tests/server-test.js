'use strict';
var chai, request, server;

server = require('../source');

chai = require('chai').expect;

request = require('co-supertest').agent(server(8000));

describe('index', function() {
  return it('should respond 200 on GET "/"', function*() {
    var response;
    return response = (yield request.get('/').expect(200).end());
  });
});
