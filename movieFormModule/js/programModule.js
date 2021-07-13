
class Program {
    constructor(date) {
        this.date = new Date (date);
        this.listOfMovies = [];
    }
    
    addMovie(movie) {
        this.listOfMovies.push(movie);
    }
    
    getData() {
        let day = this.date.getDate();
        let month = this.date.getMonth() + 1;
        let year = this.date.getFullYear();
        let date = `${day}.${month}.${year}`;
        let sumOfAllMovieDuration = 0;
        this.listOfMovies.forEach((duration) => {
            sumOfAllMovieDuration += parseInt(duration.length);
        })
        let result = date + ", " + this.listOfMovies.length + ", duration: " + sumOfAllMovieDuration;

        return result;
       
    }

    getDate = function () {
        return `${this.date.toDateString()}`;
    }
}

export default Program;
