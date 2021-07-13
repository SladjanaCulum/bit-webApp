
class Festival {
    constructor() {
        this.listOfAllMovies = [];
        this.listOfAllPrograms = [];
    }
    
    addMovie (movie) {
        this.listOfAllMovies.push(movie);
        
        return `${this.listOfAllMovies.length - 1}`;
    }

    addProgram (program) {
        this.listOfAllPrograms.push(program);
        
        return `${this.listOfAllPrograms.length - 1}`;  
    }
}

export default Festival;