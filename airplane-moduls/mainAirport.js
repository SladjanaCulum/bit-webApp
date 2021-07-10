const Airport = require("./modulExer/airport");
const controller = require("./action/controllor");


    try {
    
        let nikolaTesla = new Airport();
    
        let belgradeNewYork = controller.createFlight("Belgrade - New York", "Oct 25 2017");
        let barcelonaBelgrade = controller.createFlight("Barcelona - Belgrade", "Nov 11 2017");
    
        let passengers1 = controller.createPassenger("John", "Snow", 1, "b");
        let passengers2 = controller.createPassenger("Cersei", "Lannister", 2, "b");
        let passengers3 = controller.createPassenger("Daenerys", "Targaryen", 14);
        let passengers4 = controller.createPassenger("Tyrion", "Lannister");
         
        belgradeNewYork.addPassenger(passengers1);
        belgradeNewYork.addPassenger(passengers2);
        barcelonaBelgrade.addPassenger(passengers3);
        barcelonaBelgrade.addPassenger(passengers4);
    
        nikolaTesla.addFlight(belgradeNewYork);
        nikolaTesla.addFlight(barcelonaBelgrade);
        
        console.log(nikolaTesla.getData());
    
        } catch (error) {
            console.log(`Error message: ${error.message}`);
        }
       