import * as Notice from "./notices/notice.mjs";

export const AGPL = {
  name: "GNU Affero General Public License",
  notice: Notice.AGPL,
  version: 3
};

export function notice({ year, author, progranDescription, license }) {
  return license.notice
    .replace("<prgram-description>", progranDescription)
    .replace("<year>", year)
    .replace("<author>", author);
}
