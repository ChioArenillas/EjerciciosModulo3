/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Calcula el Fib de un número pasado como parámetro y muestra un mensaje:
"El vigésimo número de la serie de Fibonacci es 6765"

Nota: evita calcular números altos.
*/


export function exercise20(n) {
  if (typeof n !== "number" || n < 0 || n > 50) {
    return "Por favor introduce un número válido entre 0 y 50.";
  }

  if (n === 0) return "El número 0 de la serie de Fibonacci es 0";
  if (n === 1) return "El primer número de la serie de Fibonacci es 1";

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }

  const ordinal = getSpanishOrdinal(n);

  return `El ${ordinal} número de la serie de Fibonacci es ${b}`;
}

function getSpanishOrdinal(n) {
  const ordinals = {
    1: "primer",
    2: "segundo",
    3: "tercer",
    4: "cuarto",
    5: "quinto",
    6: "sexto",
    7: "séptimo",
    8: "octavo",
    9: "noveno",
    10: "décimo",
    20: "vigésimo",
    30: "trigésimo",
    40: "cuadragésimo",
    50: "quincuagésimo",
  };

  if (ordinals[n]) return ordinals[n];

  const tens = Math.floor(n / 10) * 10;
  const units = n % 10;
  return `${ordinals[tens] || tens + "º"} ${ordinals[units] || units + "º"}`;
}
