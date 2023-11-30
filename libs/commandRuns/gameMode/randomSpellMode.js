import { CommandInteraction } from "discord.js";
import { ARAM } from "../../../constants/spells.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function randomSpellMode(interaction) {
  try {
    console.log("🚀🚀🚀🚀 randomSpellMode start 🚀🚀🚀🚀");
    const firstTeamSpellPairs = getRandomSpell(ARAM, 5)
      .map(
        (firstTeamSpellPair, index) =>
          `${index}. [${firstTeamSpellPair[0]}, ${firstTeamSpellPair[1]}]`
      )
      .join("\n");

    const secondTeamSpellsPairs = getRandomSpell(ARAM, 5)
      .map(
        (secondTeamSpellPair, index) =>
          `${index}. [${secondTeamSpellPair[0]}, ${secondTeamSpellPair[1]}]`
      )
      .join("\n");
    await interaction.reply(
      `
      💙 1팀 스펠\n${firstTeamSpellPairs}
      \n💛 2팀 스펠\n${secondTeamSpellsPairs}
      `
    );
  } catch (error) {
    console.log("❌ randomSpellMode catch ❌", error);
    interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
  }
}

function getRandomSpell(spells, count) {
  const shuffledSpells = [
    ...spells,
    ...spells,
    ...spells,
    ...spells,
    ...spells,
  ];

  for (let i = shuffledSpells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledSpells[i], shuffledSpells[j]] = [
      shuffledSpells[j],
      shuffledSpells[i],
    ];
  }

  const pairs = [];
  while (shuffledSpells.length >= 2 && pairs.length < count) {
    const firstSpell = shuffledSpells.pop();
    const secondSpell = shuffledSpells.pop();
    if (firstSpell !== secondSpell) pairs.push([firstSpell, secondSpell]);
  }

  return pairs;
}
