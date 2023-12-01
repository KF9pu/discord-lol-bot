import { PrismaClient } from "@prisma/client";
import { catchConsole, setCommandLog, startConsole } from "../index.js";
import { unixNow, unixTodayStart, unixTomorrowStart } from "hsh-utils-date";

/**
 * @param {CommandInteraction} interaction
 */
export default async function firstTeamWin(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("firstTeamWin");

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
      "🚀 ~ file: firstTeamWin.js:41 ~ firstTeamWin ~ players:",
      players
    );

    const firstTeamLength = players.filter(({ team }) => team === 1).length;

    if (players.length === 0) {
      await interaction.reply("💔 아직 팀이 안짜여진 것 같아요!");
    } else if (firstTeamLength === 0) {
      await interaction.reply("💔 1팀 플레이어가 없어요!");
    } else {
      const firstTeamWinData = [
        ...players.map(({ user_id, clan_id, team }) => {
          return {
            user_id,
            clan_id,
            result: team === 1 ? 1 : 0,
            game_dt: unixNow(),
          };
        }),
      ];

      await prisma.gameLog
        .createMany({
          data: firstTeamWinData,
        })
        .then(
          async () => await interaction.reply("💚 1팀 승리 기록 입력완료!")
        );
    }

    await setCommandLog(prisma, user_id, clan_id, "firstTeamWin");
  } catch (error) {
    catchConsole("firstTeamWin", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
