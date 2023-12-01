import { PrismaClient } from "@prisma/client";
import { catchConsole, setCommandLog, startConsole } from "../index.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function getMyRecord(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("getMyRecord");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    const user = await prisma.user.findUnique({
      where: {
        user_id_clan_id: {
          user_id,
          clan_id,
        },
      },
    });

    const record = await prisma.gameLog.findMany({
      where: {
        user_id,
        clan_id,
      },
    });

    const totalGameCnt = record.length;
    const winningGameCnt = record.filter(game => game.result === 1).length;
    const defeatGameCnt = totalGameCnt - winningGameCnt;
    const winningRate = ((winningGameCnt / totalGameCnt) * 100).toFixed(2);

    await interaction.reply(
      `💚 [${user.user_name}]` +
        `\n- 총 게임수 : [${totalGameCnt}]` +
        `\n- 승리 : [${winningGameCnt}]` +
        `\n- 패배 : [${defeatGameCnt}]` +
        `\n- 승률 : [${winningRate}%]`
    );
    await setCommandLog(prisma, user_id, clan_id, "getMyRecord");
  } catch (error) {
    catchConsole("getMyRecord", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
