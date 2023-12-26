const fs = require("fs");

fs.writeFile("4-write-to-file.md", "modified using fs.writefile.", (err) => {
  if (err) throw err;
});
