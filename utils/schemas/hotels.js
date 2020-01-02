const joi = require('@hapi/joi');

const hotelIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const nameHotelSchema = joi.string().min(5).max(50);
const starsHotelSchema = joi.string().max(5);
const priceHotelSchema = joi.number().integer().min(0);
const imagesHotelSchema = joi.array().items(joi.string().uri().max(100));

const createHotelsSchema = {
  name: nameHotelSchema.required(),
  stars: starsHotelSchema.required(),
  price: priceHotelSchema.required(),
  images: imagesHotelSchema
};

const updateHotelsSchema = {
  name: nameHotelSchema,
  stars: starsHotelSchema,
  price: priceHotelSchema,
  images: imagesHotelSchema
};

module.exports = {
  hotelIdSchema,
  createHotelsSchema,
  updateHotelsSchema
};
