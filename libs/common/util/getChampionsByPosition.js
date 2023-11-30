/**
 *
 * @param {string[]} staticTypes
 * @param {*} champions
 */
export default function getChampionsByPosition(staticTypes, champions) {
  const championsByPosition = {};

  for (const staticType of staticTypes) {
    championsByPosition[staticType] = champions
      .filter(champion => champion.tags.includes(staticType))
      .sort(() => Math.random() - 0.5);
  }

  return championsByPosition;
}
