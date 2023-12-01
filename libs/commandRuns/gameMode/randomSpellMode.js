import { CommandInteraction } from "discord.js";
import { ARAM } from "../../../constants/spells.js";
import { catchConsole, setCommandLog, startConsole } from "../../index.js";
import { PrismaClient } from "@prisma/client";

/**
 * @param {CommandInteraction} interaction
 */
export default async function randomSpellMode(interaction) {
  const prisma = new PrismaClient();

  try {
    startConsole("randomSpellMode");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

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
      "[🤎 랜덤스펠모드]" +
        `
      💙 1팀 스펠\n${firstTeamSpellPairs}
      \n💛 2팀 스펠\n${secondTeamSpellsPairs}
      `
    );
    await setCommandLog(prisma, user_id, clan_id, "randomSpellMode");
  } catch (error) {
    catchConsole("randomSpellMode", interaction, error);
  } finally {
    await prisma.$disconnect();
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
