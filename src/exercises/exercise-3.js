/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/

const text = "hello world";
const vowels = "aeiou";
let counter = 0;

for (let i=0; i<text.length; i++){
    if (vowels.includes(text.charAt(i))){
        counter++;
    }
}
