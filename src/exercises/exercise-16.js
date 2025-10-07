/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/


export function exercise16(year) {
  if (typeof year !== "number" || year <= 0) {
    throw new Error("El año debe ser un número positivo");
  }

  const century = Math.ceil(year / 100);

  return century;
}
