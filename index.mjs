"use strict";

import * as fs from "fs";
import * as path from "path";
import prependFile from "prepend-file";
import FileHandler from "./lib/fileHandler.mjs";

function walkFiles(dir, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);

    files.forEach(file => {
      let filePath = path.join(dir, file);
      const stat = fs.lstatSync(filePath);
      if (stat.isFile()) callback(null, filePath);
      if (stat.isDirectory()) walkFiles(filePath, callback);
    });
  });
}

export function generateLicense({ license, dir }) {
  return new Promise((resolve, reject) => {
    let file = path.join(dir, "LICENSE");
    fs.writeFile(file, license.license, err => {
      if (err) return reject(err);
      return resolve();
    });
  });
}

export function generateNotices(notice, { dir, exclude }) {
  return new Promise((resolve, reject) => {
    walkFiles(dir, (err, file) => {
      if (err) reject(err);
      let fileHandler = FileHandler(file);
      if (fileHandler.validate(exclude))
        prependFile(file, fileHandler.wrapComment(notice));
    });
    resolve();
  });
}
