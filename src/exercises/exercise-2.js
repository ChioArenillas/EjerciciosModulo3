/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
Nota: even = par | odd = impar
*/


  function evenOdd(number){
    if( number % 2 == 0){ 
        console.log( "Number " + number + " is even");
    }
    else{
        console.log("Number " + number + " is odd");
    }
  }

evenOdd(34);
evenOdd(13);



