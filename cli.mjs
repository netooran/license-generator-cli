#!/usr/bin/env node
"use strict";

import minimist from "minimist";
import makeLicense from "./index.mjs";
const argv = minimist(process.argv.slice(2));

let notice = argv._[0] || "";
let dir = argv._[1] || "./";

if (!notice) {
  const helpMsg = `\nUsage: license-maker-cli <notice text> <project directory>`;
  console.log(helpMsg);
  process.exit();
}

const successMsg = `Successfully added license notice to all the files under ${dir}`;

makeLicense(notice, dir)
  .then(() => console.log(successMsg))
  .catch(console.error);
