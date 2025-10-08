/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/

import { movies } from "../data.js";

export function exercise15() {
  const totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
  const averageRating = totalRating / movies.length;

  const bestMovies = movies.filter(movie => movie.rating > averageRating);

  const sortedMovies = bestMovies.sort((a, b) => b.rating - a.rating);

  return sortedMovies.map(movie => ({
    title: movie.title,
    description: movie.description
  }));
}
