const assert = require('assert');
const { calculatePrice } = require('../services/priceCalculator');

describe('Price Calculation', () => {
  it('should calculate the correct price', async () => {
    const zone = 'central';
    const organizationId = 1;
    const totalDistance = 10;
    const itemType = 'GO';

    const totalPrice = await calculatePrice(zone, organizationId, totalDistance, itemType);
    console.log('totalPrice', totalPrice);
    const expectedTotalPrice = {
      'Item Type': 'GO',
      'Total Price': 1000,
      Organisation: 1,
      Zone: 'central',
    };
    assert.deepEqual(totalPrice, expectedTotalPrice); // Assuming the expected price is 100
  });

  it('should throw an error for invalid inputs', async () => {
    const zone = 'invalid_zone';
    const organizationId = 'org123';
    const totalDistance = -10;
    const itemType = 'item1';

    await assert.rejects(
      async () => {
        await calculatePrice(zone, organizationId, totalDistance, itemType);
      },
      { name: 'Error', message: 'Error executing SQL query' },
    );
  });
});
