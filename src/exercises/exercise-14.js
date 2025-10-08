/* 
EJERCICIO 14:
Muestra un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/

export function exercise14(movies) {
  function filterByActor(movies, actor) {
    return movies.filter(movie => movie.actor.includes(actor));
  }

  function highestRating(movies) {
    const resultado = movies.sort((movie1, movie2) => movie2.rating - movie1.rating);
    return resultado[0]; // devuelve la mejor valorada
  }

  const result = [];

  ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"].forEach(actor => {
    const actorMovies = filterByActor(movies, actor);
    const actorHighest = highestRating(actorMovies);
    result.push(actorHighest.title);
  });

  return result;
}
