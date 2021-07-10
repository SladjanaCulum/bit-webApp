const Passenger = require("./passenger");


class Flight {
    constructor (relation, date) {
        if(!relation || !date) {
            throw new Error ("Input relation or date are required.")
        }
        this.relation = relation;
        this.date = new Date (date);
        this.listOfPassenger = [];
    }
    addPassenger(passengers) {
        if(!passengers || !(passengers instanceof Passenger)){
            throw new Error ("Invalid passenger date.")
        }
        this.listOfPassenger.push(passengers);
    }

    getData() {
        let day = this.date.getDate();
        let month = this.date.getMonth() + 1;
        let year = this.date.getFullYear();
        let result  = ` ${day}.${month}.${year}, 
${this.relation}`
        this.listOfPassenger.forEach(function (passengers){
        result += `     
    ${passengers.getData()}`})        
        return result;
    }
}

module.exports = Flight;