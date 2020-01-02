const assert = require('assert');
const proxyquire = require('proxyquire');
const { hotelsMock, HotelsServiceMock } = require('../utils/mocks/hotels.js');
const testServer = require('../utils/testServer');

describe('routes - hotels', () => {
  const route = proxyquire('../routes/hotels', {
    '../services/hotels': HotelsServiceMock
  });

  const request = testServer(route);
  describe('GET /hotels', () => {
    it('should respond with status 200', (done) => {
      request.get('/api/hotels').expect(200, done);
    });

    it('should respond with the list of hotels', (done) => {
      request.get('/api/hotels').end((err, res) => {
        assert.deepEqual(res.body, {
          data: hotelsMock,
          message: 'hotels listed'
        });

        done();
      });
    });
  });
});
