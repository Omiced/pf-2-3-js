export function fizzbuzz(){
for (let valor = 1; valor <=100; valor++){// corre del 1 al 100
  if (valor %3===0 && valor %5===0) {
    console.log("FizzBuzz");
  }else if (valor %3===0){
    console.log("Fizz");
  }else if (valor %5===0){
    console.log("Buzz");
  }
  else {
    console.log(valor);
  }
}
}