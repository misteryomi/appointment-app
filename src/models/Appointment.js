const mongoose = require('mongoose');

// Define appointment schema field types
const schemaData = {
    title: String,
    description: String,
    date: Date,
    location: String,
}

// Create a collection of Appointment
const Appointment = mongoose.model('Appointment', schemaData);

// Export the Appointment model so other files can reuse.
module.exports = Appointment;
