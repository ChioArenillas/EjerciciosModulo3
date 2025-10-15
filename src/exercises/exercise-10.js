/* 
EJERCICIO 10:
Muestra un array con el título de las películas ordenadas alfabéticamente
*/


import { movies } from "../dataFilms";

export const titles = movies.map(movie => movie.title);
showContent(titles);
