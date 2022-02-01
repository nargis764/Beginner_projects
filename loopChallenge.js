// problem 1 //

const odd = () => {
  for(let i=1; i<20; i++) {
  if(i%2 != 0) {
    console.log(i);
  }
}  
}
odd();

// problem 2 //

const decreseBy3 = () => {
  for(let i=100; i>=0; i--) {
  if(i%3 == 0) {
    console.log(i);
  }
}  
}
decreseBy3();

//problem 3//

const printSequence = () => {
  let i = 4;
  while(i>=-3.5) {
  console.log(i);
    i = i - 1.5;
  }
}
printSequence();

//problem 4//

const sigma = () => {
  let sum=0;
  for(let i=0; i<=100; i++) {
    sum += i;
  }
  return sum;
}
 console.log(sigma());

 //problem 5//

 const factorial = () => {
  let product = 1;
  for(let i=1; i<=12; i++) {
    product *= i;
  }
  return product;
}
 console.log(factorial());