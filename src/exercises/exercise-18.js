/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/


export function exercise18(text) {
  if (typeof text !== "string" || text.trim() === "") {
    return "Texto no válido";
  }

  const words = text.trim().split(/\s+/);

  const capitalizedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  const hashtag = "#" + capitalizedWords.join("");

  return hashtag;
}
