const db = require('../database');
const Item = require("../models/items");
const Pricing = require("../models/pricing");
const Organization = require("../models/organization");

const calculatePrice = async (zone, id, totalDistance, type) => {

  const pricingInfo = `
    SELECT *
    FROM pricings
    INNER JOIN organizations ON organizations.id= pricings.organization_id
    INNER JOIN items ON items.id = pricings.item_id
    WHERE pricings.zone = '${zone}'
      AND items.type = '${type}'
      AND pricings.organization_id = ${id}
  `;

  try {
    const results = await db.query(pricingInfo, { type: db.QueryTypes.SELECT });

    let totalPrice = 0;
    if (results && results.length > 0) {
      if (totalDistance > results[0]?.base_distance_in_km) {
        totalPrice = (
            (totalDistance - results[0]?.base_distance_in_km) * results[0]?.km_price
          ) + results[0]?.fix_price;
      } else {
        totalPrice = results[0]?.fix_price;
      }

      const finalResult = {
        'Total Price': Math.round(totalPrice * 100),
        Organisation: results[0]?.id,
        Zone: results[0]?.zone,
        'Item Type': type,
      };
      return finalResult;
    }
    return 'Data not found';
  } catch (error) {
    console.log(error);
    return 'Error executing SQL query';
    throw new Error('Error executing SQL query', error);
  }
};

module.exports = { calculatePrice };
