/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

import { movies } from "../data";

export function bestRating() {
  const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
  return sortedMovies;
}

 