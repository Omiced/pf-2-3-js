export function fizzbuzz(){
  //tu código va aqui
  console.log("Fizz Buzz game")
for (let i= 1; i <=100; i++){
    if(i%3===0 && i%5===0){
        console.log("Fizz-Buzz")
    }else if(i%3===0){
        console.log("Fizz")
    }else if(i%5===0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
  
}
