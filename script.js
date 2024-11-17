function calculateDaysBetweenDates(begin, end) {
  const millisecondsPerDay = 86400000;
  const diff = end - begin;
  return Math.floor(diff / millisecondsPerDay); 
  
}

const today = new Date();

const vacation = new Date("December 31, 2021");

console.log(calculateDaysBetweenDates(today, vacation));

// Path: script.js

// we can use the Date object to create a new date instance

const now = new Date();

console.log(now);

// test it out yourself!
