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

const FileHandler = (function() {
  const handledFiles = {
    js: "/*\n<CONTENT>\n*/\n\n",
    rb: "=begin\n<CONTENT>\n=end\n\n"
  };

  return {
    isSupportedFileType: type => {
      return !!handledFiles[type];
    },

    wrapComment: (content, type) => {
      return handledFiles[type].replace("<CONTENT>", content);
    }
  };
})();

export default function makeLicense(notice, dir = "./") {
  return new Promise((resolve, reject) => {
    walkFiles(dir, file => {
      const ext = file.split(".").pop();
      if (FileHandler.isSupportedFileType(ext))
        prependFile(file, FileHandler.wrapComment(notice, ext));
    });
    resolve();
  });
}
