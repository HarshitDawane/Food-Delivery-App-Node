const express = require('express');

const router = express.Router();
const { calculateDeliveryPrice } = require('../controllers/deliveryController');
/**
 * @swagger
 * /api/delivery/calculate-price:
 *   post:
 *     summary: Get the total delivery cost
 *     description: Calculate the total delivery cost based on zone, organization ID, total distance, and item type.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *               organizationId:
 *                 type: integer
 *               totalDistance:
 *                 type: number
 *               itemType:
 *                 type: string
 *     responses:
 *       '200':
 *         description: A successful response
 */

// Route to calculate delivery price
router.post('/calculate-price', calculateDeliveryPrice);

module.exports = router;
