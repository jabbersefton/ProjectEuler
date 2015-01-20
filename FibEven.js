/* Simple while loop for project2*/

var first = 1;
var second = 2;
var fib = 0;
var fibEven = 0;

while (first < 4000000) {

  if(first % 1 === 0) {
    fibEven += first;
  }
  fib = first + second;
  first = second;
  second = fib;

}
 
 console.log(fibEven);
