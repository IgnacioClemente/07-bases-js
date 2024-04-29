// crear un repositorio llamado bases-js 

// PASAR TODAS LAS SIGUIENTES FUNCIONES A FUNCION FLECHA

// Función para sumar dos números
const sumar = (a,b) => a+b;

// Función para restar dos números
const restar = (a,b) => a-b;

// Función para multiplicar dos números
const multiplicar = (a,b) => a*b;

// Función para dividir dos números
const dividir = (a,b) => {
    if (b !== 0) {
        return a / b;
    } else {
        return 'No se puede dividir por cero';
    }
}

// Función para calcular el cuadrado de un número
const cuadrado = (numero) => numero*numero;

// Función para verificar si un número es par
const esPar = (numero) => numero % 2 === 0;

// Función para convertir grados Celsius a Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius *9) / 5 +32;

// Función para calcular el área de un círculo
const areaCirculo = (radio) => Math.PI * radio * radio;

// Función para revertir una cadena de texto
const revertirTexto = (texto) => texto.split('').reverse().join('');

console.log(revertirTexto("hola"))