import { createMovie, createProgram, addMovieToProgram } from "./formModule.js";

import * as nodeHandlerFunction from "./nodeModule.js";

nodeHandlerFunction.getButtonToCreateMovieNode.addEventListener("click", createMovie);
nodeHandlerFunction.getCreateButtonProgramNode.addEventListener("click", createProgram);
nodeHandlerFunction.getAddMovieToProgramButtonNode.addEventListener("click", addMovieToProgram);