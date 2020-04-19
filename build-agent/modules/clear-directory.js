const fs = require('fs');
const path = require('path');

module.exports = function removeDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  const list = fs.readdirSync(dirPath);
  for (let i = 0; i < list.length; i += 1) {
    const filename = path.join(dirPath, list[i]);
    const stat = fs.statSync(filename);

    if (filename === '.' || filename === '..') {
      // do nothing for current and parent dir
    } else if (stat.isDirectory()) {
      removeDir(filename);
    } else {
      fs.unlinkSync(filename);
    }
  }

  fs.rmdirSync(dirPath);
};
