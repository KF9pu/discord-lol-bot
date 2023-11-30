export default function getRemainingChampions(
  excludedChampionNames,
  champions
) {
  return champions
    .filter(({ name }) => !excludedChampionNames.includes(name))
    .sort(() => Math.random() - 0.5);
}
