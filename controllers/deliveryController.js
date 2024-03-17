const { calculatePrice } = require('../services/priceCalculator');

exports.calculateDeliveryPrice = async (req, res) => {
  const
    {
      zone, organizationId, totalDistance, itemType,
    } = req.body;
  try {
    // Call service function to calculate price
    const totalPrice = await calculatePrice(zone, organizationId, totalDistance, itemType);
    // Send response
    res.json(totalPrice);
  } catch (error) {
    console.error('Error calculating price:', error);
    res.status(500).json({ error: 'Error calculating price' });
  }
};
