// //Pedir 2 datos por pantalla y almacenarlo en dos variables 
//diferentes:
//Variable 1(8)  Variable 2 (20)
//Realizar todas las Operacion compracion vistas en la clase
//Mostra en la consola todos los posibles resultados
//y explicar con sus propias palabras porque se dio es resultado 'true , false'

// mayor que 
let num1 = parseInt(prompt("Operador Mayor que \ningresa un numero"));
let num2 = parseInt(prompt("ingresa un segundo numero"));

console.log(`El numero = ${num1} es mayor que el numero = ${num2} :`,num1>num2);
console.log("mayor que >");


if(num1 > num2) console.log("es true porque el numeo 1 es mayor que el numero 2");
else console.log("es falso porque el numero 1 es menor que el numero 2 o son iguales");


// menor que
let num3 = parseInt(prompt("Operador Menor que \ningresa un numero"));
let num4 = parseInt(prompt("ingresa un segundo numero"));

console.log(`El numero = ${num3} es menor que el numero = ${num4} :`,num3<num4);
console.log("menor que <")
if (num3 < num4) {
    console.log("es true porque el numeo 1 es menor que el numero 2")
}else{
    console.log("es falso porque el numero 1 es mayor que el numero 2 o son iguales")
}


// mayor o igual que
let num5 = parseInt(prompt("Operador mayor o igual que \ningresa un numero"));
let num6 = parseInt(prompt("ingresa un segundo numero"));

console.log(`El numero = ${num5} es mayor o igual que el numero = ${num6} :`,num5>=num6);
console.log("mayor o igual que >=")
if (num5 >= num6) {
    console.log("es true porque el numeo 1 es mayor o igual que el numero 2")
}else{
    console.log("es false porque el numeo 1 es menor que el numero dos y no son iguales")
}


// menor o igual que
let num7 = parseInt(prompt("ingresa un numero"));
let num8 = parseInt(prompt("Operador menor o igual que \ningresa un segundo numero"));

console.log(`El numero = ${num7} es menor o igual que el numero = ${num8} :`,num7<=num8);
console.log("menor o igual que <=")
if (num7 <= num8) {
    console.log("es true porque el numeo 1 es menor o igual que el numero 2")
}else {
    console.log("es false porque el numero 1 es mayor y no es igual que el numero 2")
}



// igaul que 
let num9 = parseInt(prompt("ingresa un numero"));
let num10 = parseInt(prompt("Operador igual  que \ningresa un segundo numero"));

console.log(`El numero = ${num9} es igual que el numero = ${num10} :`,num9==num10);
console.log("igual que ==")
if (num9 == num10) console.log("es true xq los numeros 1 y 2 son iguales")
else console.log("es false porque el numero 1 y 2 no son  igual")


// diferente que 
let num11 = parseInt(prompt("ingresa un numero"));
let num12 = parseInt(prompt("Operador diferente que \ningresa un segundo numero"));

console.log(`El numero = ${num11} es diferente que el numero = ${num12} :`,num11!=num12);
console.log("diferente que !=")
if (num11 != num12) console.log("es true xq los numeros 1 y 2 son diferentes")
else console.log("es false porque el numero 1 y 2 son iguales")



// identico que 
let num13 = parseInt(prompt("ingresa un numero"));
let num14 = parseInt(prompt("Operador identico que \ningresa un segundo numero"));

console.log(`El numero = ${num13} es identico que el numero = ${num14} :`,num13===num14);
console.log("identico que ===")
if (num13 === num14) console.log("es true xq los numeros 1 y 2 son identicos")
else console.log("es false porque el numero 1 y 2 no son  identicos")



// no diferente que 
let num15 = parseInt(prompt("ingresa un numero"));
let num16 = parseInt(prompt("Operador no diferente que \ningresa un segundo numero"));

console.log(`El numero = ${num15} es no diferente que el numero = ${num16} :`,num15!==num16);
console.log("no difente que !==")
if (num15 !== num16) console.log("es true xq los numeros 1 y 2 no son iguales")
else console.log("es false porque el numero 1 y 2  son  igual")






// let a = 4
// let b = 5
// //Operador Mayor que
// console.log(`El a = ${a} es mayor que el b = ${b} :`,a>b);
// //Operador Mayor o igual que
// console.log(`El a = ${a} es mayor o igual que el b = ${b} :`,a>=b);
// //Operador Menor que
// console.log(`El a = ${a} es menor que el b = ${b} :`,a<b);
// //Operador Menor o igual que
// console.log(`El a = ${a} es menor o igual que el b = ${b} :`,a<=b);

// // Operador Igual que
// console.log(`El a = ${a} es igual que el b = ${b} :`,a==b);
// //Operador Diferente que
// console.log(`El a = ${a} es diferente que el b = ${b} :`,a!=b);
// // operador identico
// console.log(`El a = ${a} es identico que el b = ${b} :`,a===b);
// //no dirente que
// console.log(`El a = ${a} es no diferente que el b = ${b} :`,a!==b);
