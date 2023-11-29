import allChamps from "../../../constants/allChamps.js";

export default function getRemainingChampions(championList) {
  return allChamps
    .filter(champ => !championList.includes(champ))
    .sort(() => Math.random() - 0.5);
}
