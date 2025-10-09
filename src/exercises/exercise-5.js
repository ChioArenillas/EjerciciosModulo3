//COMPLETADO

/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

*/


function repetitions(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    result += letter.toUpperCase() + letter.toLowerCase().repeat(i);
  }

  console.log(result);
  return result;
}


repetitions("code");
repetitions("list");
repetitions("function"); 