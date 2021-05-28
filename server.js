const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
//allow cors
app.use(cors());

// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Require employee routes
const employeeRoutes = require('./src/routes/mstremployee.routes');

// using as middleware
app.use('/api/v1/employee', employeeRoutes);

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});