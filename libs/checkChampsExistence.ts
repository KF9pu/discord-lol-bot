import getAllChampionList from "./getAllChampionList.js";

export default function checkChampsExistence(champName: string) {
  const allCHampNames = getAllChampionList();
  return allCHampNames.includes(champName);
}
