#!/usr/bin/env node
"use strict";

import * as os from "os";
import minimist from "minimist";
import makeLicense from "./index.mjs";
import * as Licenses from "./licenses/license.mjs";

function parseArgs() {
  const argv = minimist(process.argv.slice(2));
  return {
    dir: argv.dir || "./",
    year: argv.year || new Date().getFullYear(),
    author: argv.author || os.userInfo().username,
    progranDescription: argv["program-description"] || "",
    license: Licenses.AGPL
  };
}

const Messages = {
  success: () => `Successfully added notice to all the files`,
  start: ({ license, dir }) => `Applying ${license.name} to ${dir}`
};

let args = parseArgs();

console.log(Messages.start(args));

const notice = Licenses.notice(args);

makeLicense(notice, args.dir)
  .then(() => console.log(Messages.success()))
  .catch(console.error);
