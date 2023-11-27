import { CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";
import { unixTodayStart, unixTomorrowStart } from "hsh-utils-date";
import { startConsole, catchConsole, setCommandLog } from "../index.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function getJoinMemberList(interaction) {
  const prisma = new PrismaClient();

  try {
    startConsole("getJoinMemberList");
    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    await prisma.player
      .findMany({
        where: {
          join_dt: {
            gte: unixTodayStart(),
            lt: unixTomorrowStart(),
          },
        },
      })
      .then(players =>
        players.map(
          ({ user_name, team }, idx) =>
            `${idx + 1}. ${user_name} [${teamStatus(team)}]`
        )
      )
      .then(playerNames =>
        interaction.reply(
          playerNames.length === 0
            ? "💡 참여중인 인원이 없어요"
            : "🎈 참여중인 인원 \n" + playerNames.join("\n")
        )
      )
      .then(() => setCommandLog(prisma, user_id, clan_id, "getJoinMemberList"));
  } catch (error) {
    catchConsole("getJoinMemberList", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}

/**
 *
 * @param {number} num
 */
function teamStatus(num) {
  let result = ["대기", "1팀", "2팀"];
  return result[num];
}
