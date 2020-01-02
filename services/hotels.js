const MongoLib = require('../lib/mongo');

class HotelsService {
  constructor() {
    this.collection = 'hotels';
    this.mongoDB = new MongoLib();
  }

  async getHotels({ name }) {
    const query = name && { name: name };
    const hotels = await this.mongoDB.getAll(this.collection, query);
    return hotels || [];
  }

  async getHotel({ hotelId }) {
    const hotel = await this.mongoDB.get(this.collection, hotelId);
    return hotel || {};
  }

  async createHotel({ hotel }) {
    const createHotelId = await this.mongoDB.create(this.collection, hotel);
    return createHotelId;
  }

  async updateHotel({ hotelId, hotel } = {}) {
    const updatedHotelId = await this.mongoDB.update(
      this.collection,
      hotelId,
      hotel
    );
    return updatedHotelId;
  }

  async deleteHotel({ hotelId }) {
    const deletedHotelId = await this.mongoDB.delete(this.collection, hotelId);
    return deletedHotelId;
  }
}

module.exports = HotelsService;
