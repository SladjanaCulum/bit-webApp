const Person = require("../modulExer/person");
const Seat = require("../modulExer/seat");
const Passenger = require("../modulExer/passenger");
const Flight = require("../modulExer/flight");

    const createFlight = (relation, date) => {
        return new Flight (relation, date);
    }

    const createPassenger = (firstName, lastName, number, category) => {
        let person = new Person (firstName, lastName);
        let seat = new Seat (number, category);
        return new Passenger (person, seat); 
    }

module.exports = {createFlight, createPassenger};