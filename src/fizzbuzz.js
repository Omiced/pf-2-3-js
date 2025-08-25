export function fizzbuzz(){
  //tu código va aqui

  // Este es un programa de FizzBuzz
// ================ Arturo Ramirez Tejeda =============================

// El programa debe imprimir los números del 1 al 100.

for (let myLab1 = 1; myLab1 <= 100; myLab1++){
    console.log(`Numero: ${myLab1}`);
}

// Una vez que tu programa hago esto hacer los siguientes puntos.
// Remplazar los números que sean múltiplos de 3 por la palabra Fizz.
// Remplazar los números que sean múltiplos de 5 por la palabra Buzz.
// Remplazar los números que sean múltiplos de 3 y 5 por la palabra FizzBuzz.


for (let myLab1 = 1; myLab1 <= 100; myLab1++) {
        if (myLab1 % 3 === 0) {
            if (myLab1 % 5 === 0) {
                console.log("FizzBuzz");
        } else {
            console.log("Fizz");
    }
    } else if (myLab1 % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(myLab1);
    }
}
  
}

fizzbuzz();
