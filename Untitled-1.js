"use strict";

function test() {
  let x = 10;
  y = 20; // This will throw an error in strict mode because 'y' is not declared
  console.log(x);
}

test();