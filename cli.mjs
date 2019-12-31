#!/usr/bin/env node
"use strict";

import * as os from "os";
import minimist from "minimist";
import { generateLicense, generateNotices } from "./index.mjs";
import * as Licenses from "./licenses/license.mjs";

function parseArgs() {
  const argv = minimist(process.argv.slice(2));
  return {
    dir: argv.dir || "./",
    year: argv.year || new Date().getFullYear(),
    author: argv.author || os.userInfo().username,
    progranDescription: argv["program-description"] || "",
    skipLicenseGeneration: argv["skip-license-generation"] || false,
    exclude: argv.exclude || null,

    license: Licenses.AGPL
  };
}

const Messages = {
  success: () => "Done",
  start: {
    notice: ({ license, dir }) => `Applying ${license.name} notice to ${dir}`,
    license: ({ license, dir }) =>
      `Genarating ${license.name} into ${dir}/LICENSE`
  }
};

let args = parseArgs();

if (!args.skipLicenseGeneration) {
  console.log(Messages.start.license(args));
  generateLicense(args).catch(console.error);
}

const notice = Licenses.notice(args);
console.log(Messages.start.notice(args));
generateNotices(notice, args).catch(console.error);
