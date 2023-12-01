import { CommandInteraction } from "discord.js";
import {
  catchConsole,
  startConsole,
  getUnbannedChampions,
  setCommandLog,
} from "../../index.js";
import { PrismaClient } from "@prisma/client";

/**
 * @param {CommandInteraction} interaction
 */
export default async function twoRandomChampionsMode(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("twoRandomChampionsMode");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);
    const unbannedChampions = await getUnbannedChampions(clan_id);
    const suffledChampions = unbannedChampions.sort(() => Math.random() - 0.5);

    const firstTeamStaticChapions = suffledChampions
      .slice(0, 2)
      .map(({ name }, index) => `${index + 1}. ${name}`)
      .join("\n");

    const secondTeamStaticChapions = suffledChampions
      .slice(2, 4)
      .map(({ name }, index) => `${index + 1}. ${name}`)
      .join("\n");

    await interaction.reply(
      "[🤎 2랜모드] 각 팀별 고정 챔피언 목록" +
        `\n💙 1팀\n${firstTeamStaticChapions}` +
        `\n💛 2팀\n${secondTeamStaticChapions}`
    );

    await setCommandLog(prisma, user_id, clan_id, "twoRandomChampionsMode");
  } catch (error) {
    catchConsole("twoRandomChampionsMode", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
