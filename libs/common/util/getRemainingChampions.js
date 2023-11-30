export default function getRemainingChampions(staticChampionList, champions) {
  return champions
    .filter(champ => !staticChampionList.includes(champ))
    .sort(() => Math.random() - 0.5);
}
