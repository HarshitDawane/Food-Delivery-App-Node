Food Delivery App Node.js Backend

🍽️ Main Goal
The main goal of our project is to develop a robust REST API backend for a food delivery application using Node.js. Our focus lies in implementing a dynamic pricing module that calculates the total cost of food delivery based on various factors such as distance, item type, and zone.

📋 Overview
Our Food Delivery App Node.js Backend provides a powerful REST API for calculating delivery costs dynamically. Leveraging Node.js, it offers efficient handling of requests and responses. The core functionality revolves around the dynamic pricing module, which intelligently calculates delivery charges based on input parameters like distance, item type, and zone. With a PostgreSQL database backend, the system maintains robust relations between organizations, items, and pricing structures.

💻 How to Run Using GitHub
To run the project locally, follow these steps:

Clone the repository:
git clone https://github.com/your-username/food-delivery-app-node.git

Navigate to the project directory:
cd food-delivery-app-node

Install dependencies:
npm install

Start the server:
postgresql
npm start
Access the API:

The server should now be running locally. You can access the API at http://localhost:3000.
API Request and Response Format:
Request:
{
  "zone": "central",
  "organization_id": "005",
  "total_distance": 12,
  "item_type": "perishable"
}
Response:
{
  "total_price": 20.5
}
Database Models:
Organization:
{ 
    id, 
    name 
}
Item:
{ 
    id, 
    type, 
    description 
}
Pricing:
{ 
    organization_id, 
    item_id, 
    zone, 
    base_distance_in_km: 5, 
    km_price: 1.5, 
    fix_price: 10 
}
Database Schema:
Use PostgreSQL.

📚 Documentation
For an in-depth understanding of Food Delivery capabilities and how to maximize its potential in your NodeJs base Food Delivery App, please refer to our comprehensive documentation.