// Importar todas las librerías
const suma = require('./lib/suma');
const resta = require('./lib/resta');
const multiplicacion = require('./lib/multiplicacion');
const division = require('./lib/division');

// Realizar las operaciones solicitadas
console.log('=== CALCULADORA CON LIBRERÍAS ===');
console.log('');

// Suma
const resultadoSuma = suma(2, 1);
console.log(`suma(2, 1) = ${resultadoSuma}`); // resultado 3

// Resta
const resultadoResta = resta(3, 2);
console.log(`resta(3, 2) = ${resultadoResta}`); // resultado 1

// Multiplicación
const resultadoMultiplicacion = multiplicacion(2, 5);
console.log(`multiplicacion(2, 5) = ${resultadoMultiplicacion}`); // resultado 10

// División
const resultadoDivision = division(9, 3);
console.log(`division(9, 3) = ${resultadoDivision}`); // resultado 3

console.log('');
console.log('=== TODAS LAS OPERACIONES COMPLETADAS ===');