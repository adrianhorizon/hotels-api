const sinon = require('sinon');

const { hotelsMock, filteredHotelsMock } = require('./hotels');

const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(hotelsMock);

const tagQuery = { name: 'Hotel prueba' };
getAllStub.withArgs('movies', tagQuery).resolves(filteredHotelsMock('Hotel prueba'));

const createStub = sinon.stub().resolves(hotelsMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};
