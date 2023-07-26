#!/usr/bin/node

const fs = require('fs');

if (process.argv.length < 3) {
  console.log('Usage: node script_name.js <file_path>');
  process.exit(1);
}

let filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
