"use strict";

const handledFiles = {
  js: "/*\n<CONTENT>\n*/\n\n",
  java: "/*\n<CONTENT>\n*/\n\n",
  rb: "=begin\n<CONTENT>\n=end\n\n",
  rxml: "=begin\n<CONTENT>\n=end\n\n",
  rabl: "=begin\n<CONTENT>\n=end\n\n",
  html: "<!--\n<CONTENT>\n-->\n\n",
  rhtml: "<!--\n<CONTENT>\n-->\n\n",
  erb: "<!--\n<CONTENT>\n-->\n\n",
  sh: ": '\n<CONTENT>\n'\n\n"
};

export default function(file) {
  let fileType = file.split(".").pop();

  return {
    validate: exclusion => !!handledFiles[fileType] && !file.match(exclusion),

    wrapComment: content => handledFiles[fileType].replace("<CONTENT>", content)
  };
}
