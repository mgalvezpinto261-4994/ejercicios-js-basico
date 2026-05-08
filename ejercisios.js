// ===== EJERCICIO 1 =====
// Crea dos variables: una con tu nombre y otra con tu apellido. Imprime ambos juntos en un solo console.log()
let nombre = "Juan";
let apellido = "García";
console.log(nombre + " " + apellido);

// ===== EJERCICIO 2 =====
// Crea una variable con un número. Súmale 5, luego multiplícalo por 3 e imprime el resultado.
let numero = 10;
let resultado = (numero + 5) * 3;
console.log(resultado);

// ===== EJERCICIO 3 =====
// Crea una variable con tu comida favorita e imprímela en consola.
let comidaFavorita = "Pizza";
console.log(comidaFavorita);

// ===== EJERCICIO 4 =====
// Crea dos variables a = 10 y b = 3
// Imprime: suma, resta, multiplicación, módulo
// Luego cambia los valores por strings y luego string y number
let a = 10;
let b = 3;

console.log("--- Ejercicio 4: Con números ---");
console.log("Suma: " + (a + b));
console.log("Resta: " + (a - b));
console.log("Multiplicación: " + (a * b));
console.log("Módulo: " + (a % b));

console.log("--- Ejercicio 4: Con strings ---");
a = "10";
b = "3";
console.log("Suma: " + (a + b)); // Concatena: "103"
console.log("Resta: " + (a - b)); // Convierte a números: 7
console.log("Multiplicación: " + (a * b)); // Convierte a números: 30
console.log("Módulo: " + (a % b)); // Convierte a números: 1

console.log("--- Ejercicio 4: Con string y number ---");
a = "10";
b = 3;
console.log("Suma: " + (a + b)); // Concatena: "103"
console.log("Resta: " + (a - b)); // Convierte a números: 7
console.log("Multiplicación: " + (a * b)); // Convierte a números: 30
console.log("Módulo: " + (a % b)); // Convierte a números: 1

// ===== EJERCICIO 5 =====
// Crea una variable edad = 15
// Imprime si: es mayor a 10, es menor a 18
let edad = 15;
console.log("--- Ejercicio 5 ---");
console.log("¿edad > 10? " + (edad > 10));
console.log("¿edad < 18? " + (edad < 18));

// ===== EJERCICIO 6 =====
// Crea una variable numero = 8
// Imprime si: es mayor que 5 Y menor que 10
let numero6 = 8;
console.log("--- Ejercicio 6 ---");
console.log("¿Es mayor que 5 Y menor que 10? " + (numero6 > 5 && numero6 < 10));

// ===== EJERCICIO 7 =====
// Crea una variable nota = 6
// Imprime si: es igual a 7
let nota = 6;
console.log("--- Ejercicio 7 ---");
console.log("¿nota === 7? " + (nota === 7));

// ===== EJERCICIO 8 =====
// Crea una variable temperatura = 25
// Imprime si: es mayor o igual a 30
let temperatura = 25;
console.log("--- Ejercicio 8 ---");
console.log("¿temperatura >= 30? " + (temperatura >= 30));

// ===== EJERCICIO 9 =====
// Crea dos números
// Imprime: si son iguales, si uno es mayor que el otro
let num1 = 15;
let num2 = 20;
console.log("--- Ejercicio 9 ---");
console.log("¿num1 === num2? " + (num1 === num2));
console.log("¿num1 > num2? " + (num1 > num2));
console.log("¿num2 > num1? " + (num2 > num1));

// ===== EJERCICIO 10 =====
// Crea: edad=17; tienePermiso=true;
// Imprime: puede conducir (edad >= 18 O tienePermiso)
let edad10 = 17;
let tienePermiso = true;
console.log("--- Ejercicio 10 ---");
console.log("¿Puede conducir? " + (edad10 >= 18 || tienePermiso));

// ===== EJERCICIO 11 =====
// Crea: usuario="admin"; password="1234";
// Imprime: usuario es "admin" Y password es "1234"
let usuario = "admin";
let password = "1234";
console.log("--- Ejercicio 11 ---");
console.log("¿Usuario es admin Y password es 1234? " + (usuario === "admin" && password === "1234"));
