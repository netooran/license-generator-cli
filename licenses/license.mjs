import * as Notice from "./notices/notice.mjs";
import * as License from "./licenses/license.mjs";

export const AGPL = {
  name: "GNU Affero General Public License",
  notice: Notice.AGPL,
  license: License.AGPL,
  version: 3
};

export function notice({ year, author, progranDescription, license }) {
  return license.notice
    .replace("<prgram-description>", progranDescription)
    .replace("<year>", year)
    .replace("<author>", author);
}
