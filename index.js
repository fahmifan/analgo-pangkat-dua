#!/usr/bin/env node

const loop = require('./loop');
const recursive = require('./recursive');
const faker = require('faker');

function main() {
  console.log('====== loop =======');
  console.log('2^1 === 2 ? %o', eval(loop(1) === 2));
  console.log('2^2 === 4 ? %o', eval(loop(2) === 4));
  console.log('2^3 === 8 ? %o', eval(loop(3) === 8));
  console.log('2^4 === 16 ? %o', eval(loop(4) === 16));

  console.log('====== recursive =======');
  console.log('2^1 === 2 ? %o', eval(recursive(1) === 2));
  console.log('221 === 4 ? %o', eval(recursive(2) === 4));
  console.log('2^3 === 8 ? %o', eval(recursive(3) === 8));
  console.log('2^4 === 16 ? %o', eval(recursive(4) === 16));

  const lableLoop = 'loop';
  const lableRecur = 'recursive';

  for (let i = 0; i < 50; i++) {
    const randNum = faker.random.number(100);
    console.log(`\n>>> test ${i + 1} 2^${randNum}`);
    console.time(lableLoop);
    loop(randNum);
    console.timeEnd(lableLoop);
  
    console.time(lableRecur);
    recursive(randNum);
    console.timeEnd(lableRecur);
  }

}

main();
