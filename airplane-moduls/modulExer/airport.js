const Flight = require("./flight");

    class Airport {
        constructor () {
            this.name = "Nikola Tesla";
            this.listOfFlight = [];
        }
        addFlight(flight) {
            if(!flight || !(flight instanceof Flight)){
                throw new Error ("Invalid flight date.");
            }
            this.listOfFlight.push(flight);
        }

        passengersNumber() {
            let count = 0;
            this.listOfFlight.forEach(function (flight) {
                count += `${flight.listOfPassenger.length}`;
            })
            return count;
        }
        getData() {
            let result = `Airport: ${this.name}, total passanger: ${this.passengersNumber()}
            `;
            this.listOfFlight.forEach(function(flight) {
                result += flight.getData();
            })
            return result;
        }
    }

    module.exports = Airport;