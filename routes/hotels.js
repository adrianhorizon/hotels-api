const express = require('express');
const HotelsService = require('../services/hotels');
const { hotelIdSchema, createHotelsSchema, updateHotelsSchema } = require('../utils/schemas/hotels');
const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require('../utils/time');

const hotelsApi = (app) => {
  const router = express.Router();
  app.use('/api/hotels', router);

  const hotelsService = new HotelsService();

  router.get('/', async (req, res, next) => {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { name } = req.query;

    try {
      const hotels = await hotelsService.getHotels({ name });

      res.status(200).json({
        hotels: hotels,
        totalSize: hotels.length,
        message: 'hotels listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:hotelId',
    validationHandler({ hotelId: hotelIdSchema }, 'params'),
    async (req, res, next) => {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { hotelId } = req.params;

      try {
        const hotels = await hotelsService.getHotel({ hotelId });

        res.status(200).json({
          hotels: hotels,
          message: 'hotel retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post('/', validationHandler(createHotelsSchema), async (
    req,
    res,
    next
  ) => {
    const { body: hotel } = req;
    try {
      const createdHotelId = await hotelsService.createHotel({ hotel });

      res.status(201).json({
        data: createdHotelId,
        message: 'hotel created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:hotelId',
    validationHandler({ hotelId: hotelIdSchema }, 'params'),
    validationHandler(updateHotelsSchema),
    async (req, res, next) => {
      const { hotelId } = req.params;
      const { body: hotel } = req;

      try {
        const updatedHotelId = await hotelsService.updateHotel({
          hotelId,
          hotel
        });

        res.status(200).json({
          hotels: updatedHotelId,
          message: 'hotel updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:hotelId',
    validationHandler({ hotelId: hotelIdSchema }, 'params'),
    async (req, res, next) => {
      const { hotelId } = req.params;

      try {
        const deletedHotelId = await hotelsService.deleteHotel({ hotelId });

        res.status(200).json({
          hotels: deletedHotelId,
          message: 'hotel deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = hotelsApi;
