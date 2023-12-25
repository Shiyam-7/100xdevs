/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  count = 0;
  beforeTime = new Date().getTime();
  for (let i = 1; i <= n; i++) {
    count += i;
  }
  afterTime = new Date().getTime();

  return (afterTime - beforeTime) / 1000;
}

// const ans1 = calculateTime(100);
// const ans2 = calculateTime(100000);
const ans3 = calculateTime(1000000000);

// console.log(ans1);
// console.log(ans2);
console.log(ans3);
