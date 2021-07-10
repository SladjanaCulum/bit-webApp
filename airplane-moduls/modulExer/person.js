

class Person {
    constructor (name, surname) {
        if(!name || !surname) {
            throw new Error ("Input name or surname are required.");
        }
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.surname = surname.charAt(0).toUpperCase() + surname.slice(1);
    }

    getData () {
        return `${this.name} ${this.surname}`;
    }
}

module.exports = Person;