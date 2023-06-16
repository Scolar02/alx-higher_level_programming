#!/usr/bin/node

module.exports = class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
};

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }

  print () {
    const row = 'X'.repeat(this.width);
    for (let i = 0; i < this.height; i++) {
      console.log(row);
    }
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
