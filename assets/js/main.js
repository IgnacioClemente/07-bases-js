// crear un repositorio llamado bases-js 

// PASAR TODAS LAS SIGUIENTES FUNCIONES A FUNCION FLECHA

// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

const sumar = (a,b) => a+b;

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

const restar = (a,b) => a-b;

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

const multiplicar = (a,b) => a*b;

// Función para dividir dos números
function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'No se puede dividir por cero';
    }
}

const dividir = (a,b) => {
    if (b !== 0) {
        return a / b;
    } else {
        return 'No se puede dividir por cero';
    }
}

// Función para calcular el cuadrado de un número
function cuadrado(numero) {
    return numero * numero;
}

const cuadrado = (numbero) => numero*numero;

// Función para verificar si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

const esPar = (numero) => numero % 2 === 0;

// Función para convertir grados Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

const celsiusToFahrenheit = (celsius) => (celsius *9) / 5 +32;

// Función para calcular el área de un círculo
function areaCirculo(radio) {
    return Math.PI * radio * radio;
}

const areaCirculo = (radio) => Math.PI * radio * radio;

// Función para revertir una cadena de texto
function revertirTexto(texto) {
    return texto.split('').reverse().join('');
}

const revertirTexto = (texto) => texto.split('').reverse().join('');