

class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = parseInt(length);
        this.genreMovie = genre.charAt(0).toUpperCase() + genre.charAt(genre.length-1).toUpperCase();
    }

    getData() {        
        return `${this.title}, ${this.length} min, ${this.genreMovie}`;
    }
}

export default Movie;