#!/usr/bin/node

const { dict } = require('./101-data');

const userDict = {};

for (const userId in dict) {
  const occurrence = dict[userId];

  if (occurrence in userDict) {
    userDict[occurrence].push(userId);
  } else {
    userDict[occurrence] = [userId];
  }
}

console.log(userDict);
