const fs = require("fs");

fs.readFile("1-file-cleaner.txt", "utf-8", (err, data) => {
  const modifiedData = data.replace(/\s+/g, " ");
  fs.writeFileSync("1-file-cleaner.txt", modifiedData, (err) => {
    if (err) throw err;
  });
});
