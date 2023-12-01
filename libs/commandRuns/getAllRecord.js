import { PrismaClient } from "@prisma/client";
import { catchConsole, setCommandLog, startConsole } from "../index.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function getAllRecord(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("getAllRecord");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    const users = await prisma.user.findMany({
      where: {
        clan_id,
      },
    });

    const allRecords = await prisma.gameLog.findMany({
      where: {
        clan_id,
      },
    });

    const userByRecords = users.map(({ user_name, user_id: users_user_id }) => {
      const records = allRecords.filter(
        ({ user_id }) => users_user_id === user_id
      );

      const totalGameCnt = records.length;
      const winningGameCnt = records.filter(game => game.result === 1).length;
      const defeatGameCnt = totalGameCnt - winningGameCnt;
      const winningRate = ((winningGameCnt / totalGameCnt) * 100).toFixed(2);

      return (
        "┌" +
        `\n├💚 [${user_name}] : [${user_id}]` +
        `\n├ 총 게임수 : [${totalGameCnt}]` +
        `\n├ 승리 : [${winningGameCnt}]` +
        `\n├ 패배 : [${defeatGameCnt}]` +
        `\n├ 승률 : [${winningRate}%]` +
        "\n└"
      );
    });

    await interaction.reply(userByRecords.join("\n"));
    await setCommandLog(prisma, user_id, clan_id, "getAllRecord");
  } catch (error) {
    catchConsole("getAllRecord", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
