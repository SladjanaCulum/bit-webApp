

class Seat {
    constructor (number=(Math.floor(Math.random() * (100 - 10) + 10)), category = "e") {        
        if(!["b", "e"].includes(category)){
            throw new Error ("Invalid category input.");
        }
        this.number = number;
        this.category = category;
    }

    getData() {
        return `${this.number}, ${this.category.toUpperCase()}`;
    }
}

module.exports = Seat;