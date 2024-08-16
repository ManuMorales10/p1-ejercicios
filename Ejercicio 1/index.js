// Pido dos extremos para comparar
const max = parseInt(prompt("Ingresa el maximo comparar"));
const min = parseInt(prompt("Ingresa el minimo comparar"));

// Pido el numero para comparar 
const num = parseInt(prompt("Ingresa el numero a comparar"));

// Verfico si el numero esta en rango 
if(num >= min && num <= max) {
    // Entro aca solo si esta entre el maximo y el minimo
alert("El numero esta dentro del rango");
}   
else {
    alert("El numero no esta dentro del rango");
}

// Pregunto si es par 

if(num % 2 == 1) {
    alert("El numero es impar");
}
else {
    alert("El numero es par");
}

