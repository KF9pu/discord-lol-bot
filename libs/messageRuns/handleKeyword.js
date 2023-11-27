import championBan from "../commandRuns/championBan.js";

/**
 * @param {*} msg
 * @param {*} keyword
 * @returns {string}
 */
export default async function handleKeyword(msg, keyword) {
  switch (keyword) {
    case "밴":
      return await championBan(msg);
    default:
      return `🖤 키워드 "${keyword}"를 처리하는 로직이 없습니다.`;
  }
}
