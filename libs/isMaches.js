/**
 *
 * @param {string} commandName
 * @param {RegExp} pattern
 * @returns
 */
export default function isMaches(commandName, pattern) {
  return commandName.match(pattern);
}
