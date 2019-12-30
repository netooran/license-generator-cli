import { readFileSync } from "fs";

export const AGPL = {
  name: "GNU Affero General Public License",
  notice: "licenses/notices/agpl.txt",
  version: 3
};

export function notice({ year, author, progranDescription, license }) {
  return readFileSync(license.notice)
    .toString()
    .replace("<prgram-description>", progranDescription)
    .replace("<year>", year)
    .replace("<author>", author);
}
