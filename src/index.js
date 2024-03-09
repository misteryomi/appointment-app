const express = require('express');
const app = express();

const port = 3000;

const appointmentController = require('./controllers/AppointmentController');

const db = require('./db');

// Middleware
app.use(express.json());

// Middleware to connect with the database before a request is completed
app.use(function (req, res, next) {

    // Connect to the db
    db.connect();

    // continue with the request
    next();
})



app.get('/appointments', async (req, res) => {
    const data = await appointmentController.list();

    res.json(data);
});

app.post('/appointments', (req, res) => {

    const title = req.body.title;
    const location = req.body.location;
    const date = req.body.date;
    const description = req.body.description;

    const data = appointmentController.create(title, location, date, description);

    res.json(data);
});


app.patch('/appointments', (req, res) => {

    // Updating
});

app.delete('/appointments', (req, res) => {

    // remove
});


app.listen(port, () => {
    console.log(`Appointment booking app is listening on port ` + port);
});