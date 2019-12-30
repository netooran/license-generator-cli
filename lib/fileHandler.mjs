"use strict";

const handledFiles = {
  js: "/*\n<CONTENT>\n*/\n\n",
  rb: "=begin\n<CONTENT>\n=end\n\n"
};

export default function(file) {
  let fileType = file.split(".").pop();

  return {
    validate: exclusion => !!handledFiles[fileType] && !file.match(exclusion),

    wrapComment: content => handledFiles[fileType].replace("<CONTENT>", content)
  };
}
