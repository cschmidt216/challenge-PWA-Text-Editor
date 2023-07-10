const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require(path.join(__dirname, 'routes', 'htmlRoutes.js'));
htmlRoutes(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
