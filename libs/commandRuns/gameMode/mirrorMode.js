import { CommandInteraction } from "discord.js";
import {
  startConsole,
  catchConsole,
  getUnbannedChampions,
  setCommandLog,
} from "../../index.js";
import { PrismaClient } from "@prisma/client";
/**
 * @param {CommandInteraction} interaction
 */
export default async function mirrorMode(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("mirrorMode");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    const unbannedChampions = await getUnbannedChampions(clan_id);
    const suffledChampions = unbannedChampions.sort(() => Math.random() - 0.5);

    const resultChapions = suffledChampions
      .slice(0, 20)
      .map(({ name }, index) => `💙 ${index + 1}. ${name}`)
      .join("\n");
    await interaction.reply(
      "[🤎 미러모드]" +
        `
        💚 공통 챔피언 목록이에요!
        \n${resultChapions}
        `
    );

    await setCommandLog(prisma, user_id, clan_id, "mirrorMode");
  } catch (error) {
    catchConsole("mirrorMode", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
