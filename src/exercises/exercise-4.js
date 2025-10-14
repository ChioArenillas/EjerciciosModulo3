/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

export function exercise4() {
  const text = "Hi, I am learning Javascript";
  const result = text.replace(/[aeiou]/gi, '');
  return result;
}
