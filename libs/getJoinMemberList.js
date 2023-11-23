import { CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";
import { unixTodayStart, unixTomorrowStart } from "hsh-utils-date";

/**
 * @param {CommandInteraction} interaction
 */
export default async function getJoinMemberList(interaction) {
  const prisma = new PrismaClient();

  try {
    const players = await prisma.player.findMany({
      where: {
        join_dt: {
          gte: unixTodayStart(),
          lt: unixTomorrowStart(),
        },
      },
    });
    const playerNames = players.map(
      ({ user_name, team }, idx) =>
        `${idx + 1}. ${user_name} [${teamStatus(team)}]`
    );

    interaction.reply("🎈 참여중인 인원 \n" + playerNames.join("\n"));
  } catch (error) {
    interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
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
