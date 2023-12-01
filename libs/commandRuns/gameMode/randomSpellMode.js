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
        "\n[💛 모드 설명 : 주어진 스펠쌍을 들고 조합을 짜는 모드]" +
        "\n[🔶 만든이 : 정화와 총명은 다른 스펠보다 나올 확률이 60% 적습니다.]\n" +
        `\n💙 1팀 스펠\n${firstTeamSpellPairs}` +
        `\n💛 2팀 스펠\n${secondTeamSpellsPairs}`
    );
    await setCommandLog(prisma, user_id, clan_id, "randomSpellMode");
  } catch (error) {
    catchConsole("randomSpellMode", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}

function getRandomSpell(spells, count) {
  const excludeSpells = ["총명", "정화"];
  const shuffledSpells = Array.from({ length: 3 }, (_, index) =>
    index > 1 ? spells : spells.filter(spell => !excludeSpells.includes(spell))
  ).flat();

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
