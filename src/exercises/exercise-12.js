/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/


import { movies, categories } from "../data";

export function exercise12() {
  const filteredMovies = movies
    .filter(movie => movie.category === categories.drama)
    .map(movie => ({
      title: movie.title,
      description: movie.description,
    }));

  return filteredMovies;
}
