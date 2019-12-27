"use strict";

import * as fs from "fs";
import * as path from "path";
import prependFile from "prepend-file";

function walkFiles(dir, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) throw new Error(err);
    files.forEach(file => {
      let filePath = path.join(dir, file);
      const stat = fs.lstatSync(filePath);
      if (stat.isFile()) callback(filePath);
      if (stat.isDirectory()) walkFiles(filePath, callback);
    });
  });
}

export default function makeLicense(notice, dir = "./") {
  return new Promise((resolve, reject) => {
    walkFiles(dir, file => prependFile(file, `${notice}\n\n`));
    resolve();
  });
}
