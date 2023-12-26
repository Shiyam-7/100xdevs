let count = 0;
function timeOut() {
  console.log(count++);
  setTimeout(() => {
    timeOut();
  }, 1000);
}
timeOut();
