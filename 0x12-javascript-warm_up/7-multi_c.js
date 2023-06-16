#!/usr/bin/node

const number = parseInt(process.argv[2]);

if (Number.isNaN(number)) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  while (i < process.argv[2]) {
    console.log('C is fun');
    i++;
  }
}
