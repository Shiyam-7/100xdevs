// function updateTime() {
//   const now = new Date();

//   const time1 = now.toLocaleTimeString();

//   const time2 = now.toLocaleTimeString();

//   console.log(`${time2} && ${time1}`);
// }

// // Update the clock every second
// setInterval(updateTime, 1000);

// // Initial update
// updateTime();

const date = new Date();
console.log("current Time", date);
var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes
offset = ISToffSet * 60 * 1000;
var ISTTime = new Date(date.getTime() + offset);
console.log("IST Date", ISTTime);
