import { PrismaClient } from "@prisma/client";
import { catchConsole, startConsole } from "../index.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function secondTeamWin(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("secondTeamWin");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    const players = await prisma.player.findMany({
      where: {
        clan_id,
        join_dt: {
          gte: unixTodayStart(),
          lt: unixTomorrowStart(),
        },
      },
    });
    console.log(
      "🚀 ~ file: secondTeamWin.js:24 ~ secondTeamWin ~ players:",
      players
    );

    const secondTeamLength = players.filter(({ team }) => team === 2).length;

    if (players.length === 0) {
      await interaction.reply("💔 아직 팀이 안짜여진 것 같아요!");
    } else if (secondTeamLength === 0) {
      await interaction.reply("💔 2팀 플레이어가 없어요!");
    } else {
      const secondTeamWinData = [
        ...players.map(({ user_id, clan_id, team }) => {
          return {
            user_id,
            clan_id,
            result: team === 2 ? 1 : 0,
            game_dt: unixNow(),
          };
        }),
      ];

      await prisma.gameLog
        .createMany({
          data: secondTeamWinData,
        })
        .then(
          async () => await interaction.reply("💚 2팀 승리 기록 입력완료!")
        );
    }

    await setCommandLog(prisma, user_id, clan_id, "secondTeamWin");
  } catch (error) {
    catchConsole("secondTeamWin", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
