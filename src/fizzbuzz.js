export function fizzbuzz(){
  //tu código va aqui
  //Jose Angel Lozano

  console.log("Ejercicio FizzBuzz, se imprimen los numeros del 1 al 100 y despues todos los nueros multiplos de 3 se le pone la palabra fizz y a los multiplos de 5 la palbra buzz, pero cuando sean multipls de los dos se pone la palabra bizzbuzz:");
  
for (let i = 1; i <= 100; i++) {
  console.log(i);
}


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

  
}

fizzbuzz();

