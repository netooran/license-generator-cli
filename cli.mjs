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
    exclude: argv.exclude || null,

    license: Licenses.AGPL
  };
}

const Messages = {
  success: () => "Done",
  start: ({ license, dir }) => `Applying ${license.name} to ${dir}`
};

let args = parseArgs();

console.log(Messages.start(args));

const notice = Licenses.notice(args);

makeLicense(notice, args.dir, args.exclude)
  .then(() => console.log(Messages.success()))
  .catch(console.error);
