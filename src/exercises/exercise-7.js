/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
Ejemplos:
"La frase 'Dábale arroz a la zorra el abad' es un palíndromo"
"La frase 'hola mundo' NO es un palíndromo"
*/

const text = "Dabale arroz a la zorra el abad";

function isPalindrome(text){
    text = text.replaceAll(" ","");
    text = text.toLowerCase();
    }
    reversedText = text.split("").reverse().join("");
    return text === reversedText;
    

