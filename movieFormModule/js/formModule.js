import Festival from "./festivalModule.js";
import Program from "./programModule.js";
import Movie from "./movieModul.js";

import * as nodeHandler from "./nodeModule.js";

export let festival = new Festival();


//function for create movie

export let createMovie = () => {
    //create new movie
    let movieObject = new Movie (nodeHandler.titleNode.value, nodeHandler.lengthNode.value, 
        nodeHandler.genreNode.value);
    
    
    if(!nodeHandler.titleNode.value){
        alert("Title is empty");
    } else if(!nodeHandler.lengthNode.value){
        alert("Length is empty");
    } else if(nodeHandler.genreNode.value === "-"){
        alert("You must chose genre");
    }
    
    let index = festival.addMovie(movieObject);
    //create li element to put list of movie
    let createLiElementNode = document.createElement("li");

    //add text to li
    createLiElementNode.textContent = movieObject.getData();

    //add li in list
    nodeHandler.ulListForAddMovieNode.appendChild(createLiElementNode);

    //add movie to movie list in program
    var createOptionNode = document.createElement("option");
    createOptionNode.textContent = movieObject.getData();
    createOptionNode.setAttribute("value", index);
    nodeHandler.addMovieToListInProgramNode.appendChild(createOptionNode);

    //clear value
    nodeHandler.titleNode.value = "";
    nodeHandler.lengthNode.value = "";
    nodeHandler.genreNode.value = "-";
}

//create program

export let createProgram = () => {
    
    let date = new Date (nodeHandler.dateNode.value);

    if(date.getTime() < Date.now()) {
        nodeHandler.writeErrMessNode.textContent = `Date can not be older than now.`;
        return;
    }

    let newProgram = new Program (date);

    let index = festival.addProgram(newProgram);
    //create li
    let liListOfProgram = document.createElement("li");

    //add content
    liListOfProgram.textContent = newProgram.getData();

    //add li in ul
    nodeHandler.getUlListForProgramNode.appendChild(liListOfProgram);

    //add program to the list
    let createOptionProgramNode = document.createElement("option");
    createOptionProgramNode.textContent = newProgram.getData();
    createOptionProgramNode.setAttribute("value", index);
    nodeHandler.selectProgramListNode.appendChild(createOptionProgramNode);
}

export let addMovieToProgram = () => {
    //find value of movie-dropdown and program-dropdown
    let selectedMovieIndex = document.getElementById("movie-dropdown-list").value;
    let selectedProgramIndex = document.getElementById("program-dropdown-list").value;
    
    console.log(selectedMovieIndex, selectedProgramIndex);

    let selectedMovie = festival.listOfAllMovies[selectedMovieIndex];
    let selectedProgram = festival.listOfAllPrograms[selectedProgramIndex];


    let oldProgramData = selectedProgram.getData();

    selectedProgram.addMovie(selectedMovie);

    let allLiNode = document.querySelectorAll("li");

    allLiNode.forEach((li) => {
        if(li.textContent === oldProgramData){
            li.textContent = selectedProgram.getData();   
            
        }
    })
    
    document.getElementById("movie-dropdown-list").value = "-";
    document.getElementById("program-dropdown-list").value = "-";
    


}




















