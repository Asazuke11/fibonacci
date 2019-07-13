'use strict';

const fibMap = new Map();

fibMap.set(0,0);
fibMap.set(1,1);

function fib(n) {
  if(fibMap.has(n)){
    return fibMap.get(n);
  }
  const value = fib(n - 2) + fib(n - 1);
  fibMap.set(n,value);
  return value;
}



const length = 40;

for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}