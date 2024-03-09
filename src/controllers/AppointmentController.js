const Appointment = require('../models/Appointment');

// CRUD

// Create a new appointment
function create(title, location, date, description) {

    const appointment = new Appointment;

    appointment.title = title;
    appointment.location = location;
    appointment.date = date;
    appointment.description = description;

    appointment.save();

    return JSON.stringify(appointment);
}

async function list() {

    const appointments = await Appointment.find();

    return appointments;
}

function show() {

}

function update() {

}

function remove() {

}

module.exports = {
    create,
    list,
    show,
    update,
    remove
}