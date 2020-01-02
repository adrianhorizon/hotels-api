const hotelsMock = [
  {
    "id": "5e0d44307d912167dccc223",
    "name": "Hotel Emperador",
    "stars": "3",
    "images": [
      "https://a0.muscache.com/im/pictures/d2fff754-183d-43a9-88d8-8081cb997316.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/a449a829-0ffc-40d7-9c40-54f19d2bc414.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/3db93c37-8360-453d-a3a3-c3155b576d8f.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/2ae8f587-136b-40cc-8be7-5b4563c7fc87.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/d1221a6f-09d9-4c0a-83bf-601763a9826a.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/9b3955e1-0f59-4e2e-b7d6-70a817087b38.jpg?aki_policy=xx_large"
    ],
    "price": "1596"
  },
  {
    "id": "5e0d44307d1223167ccc0a6e",
    "name": "Hotel rey",
    "stars": "3",
    "images": [
      "https://a0.muscache.com/im/pictures/d2fff754-183d-43a9-88d8-8081cb997316.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/a449a829-0ffc-40d7-9c40-54f19d2bc414.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/3db93c37-8360-453d-a3a3-c3155b576d8f.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/2ae8f587-136b-40cc-8be7-5b4563c7fc87.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/d1221a6f-09d9-4c0a-83bf-601763a9826a.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/9b3955e1-0f59-4e2e-b7d6-70a817087b38.jpg?aki_policy=xx_large"
    ],
    "price": "1596"
  },
  {
    "id": "567d44307d912167dccc0a6e",
    "name": "Hotel prueba",
    "stars": "1",
    "images": [
      "https://a0.muscache.com/im/pictures/d2fff754-183d-43a9-88d8-8081cb997316.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/a449a829-0ffc-40d7-9c40-54f19d2bc414.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/3db93c37-8360-453d-a3a3-c3155b576d8f.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/2ae8f587-136b-40cc-8be7-5b4563c7fc87.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/d1221a6f-09d9-4c0a-83bf-601763a9826a.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/9b3955e1-0f59-4e2e-b7d6-70a817087b38.jpg?aki_policy=xx_large"
    ],
    "price": "1597"
  }
];

const filteredHotelsMock = (tag) => hotelsMock.filter(movie => movie.name.includes(tag));

class HotelsServiceMock {
  async getHotels() {
    return Promise.resolve(hotelsMock);
  }

  async createHotel() {
    return Promise.resolve(hotelsMock[0]);
  }
}

module.exports = {
  hotelsMock,
  filteredHotelsMock,
  HotelsServiceMock
};
