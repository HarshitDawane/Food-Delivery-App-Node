const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const sequelize = require('./database');
const swaggerSpec = require('./swagger');
const deliveryRoutes = require('./routes/deliveryroutes');

const app = express();

app.use(bodyParser.json());

// Initialize database connection
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/delivery', deliveryRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log('Server running on port', PORT));
