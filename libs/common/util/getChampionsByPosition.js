import allChamps from "../../../constants/allChamps.js";
/**
 *
 * @param {string[]} staticTypes
 */
export default function getChampionsByPosition(staticTypes) {
  const championsByPosition = {};

  for (const staticType of staticTypes) {
    championsByPosition[staticType] = allChamps
      .filter(champ => champ.tags.includes(staticType))
      .sort(() => Math.random() - 0.5);
  }

  return championsByPosition;
}
