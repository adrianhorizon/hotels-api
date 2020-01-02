const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { hotelsMock } = require('../utils/mocks/hotels');

describe('services - hotels', () => {
  const HotelsServiceMock = proxyquire('../services/hotels', {
    '../lib/mongo': MongoLibMock
  });

  const hotelsService = new HotelsServiceMock();

  describe('when getHotels method is called', async () => {
    it('should call the getall MongoLib method', async () => {
      await hotelsService.getHotels({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of hotels', async () => {
      const result = await hotelsService.getHotels({});
      const expected = hotelsMock;
      assert.deepEqual(result, expected);
    });
  });
});
