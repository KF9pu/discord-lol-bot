import { PrismaClient } from "@prisma/client";
import { CommandInteraction } from "discord.js";
import { unixTodayStart, unixTomorrowStart } from "hsh-utils-date";
import setCommandLog from "./setCommandLog.js";
import startConsole from "../common/consoles/startConsole.js";
import catchConsole from "../common/consoles/catchConsole.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function divideTeams(interaction) {
  const prisma = new PrismaClient();

  try {
    startConsole("divideTeams");
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
      .then(players => players.map(({ user_name }) => `${user_name}`))
      .then(playerNames => playerNames.sort(() => Math.random() - 0.5))
      .then(async shuffledPlayerNames => {
        if (shuffledPlayerNames.length < 2) {
          await interaction.reply(
            `🧡 플레이어가 2명 이상 필요합니다.\n💚 현재참여인원 : ${shuffledPlayerNames.length}`
          );
        } else {
          const excludedPlayer =
            shuffledPlayerNames.length % 2 === 0
              ? "-"
              : shuffledPlayerNames.pop();
          const halfLength = Math.floor(shuffledPlayerNames.length / 2);
          const firstTeamNames = formatPlayerNames(
            shuffledPlayerNames.slice(0, halfLength)
          );
          const secondTeamNames = formatPlayerNames(
            shuffledPlayerNames.slice(halfLength)
          );

          await interaction.reply(
            "\n┌" +
              `\n│💚 참여인원 : ${shuffledPlayerNames.length}` +
              "\n└" +
              "\n┌" +
              "\n│💙 1팀" +
              `\n├${firstTeamNames}` +
              "\n└" +
              "\n┌" +
              "\n│💛 2팀" +
              `\n├${secondTeamNames}` +
              "\n└" +
              "\n┌" +
              `\n│💜 제외인원 : ${excludedPlayer}` +
              "\n└"
          );
        }
      })
      .then(() => setCommandLog(prisma, user_id, clan_id, "divideTeams"));
  } catch (error) {
    catchConsole("divideTeams", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}

/**
 *
 * @param {string[]} playerNames
 * @returns {string}
 */
function formatPlayerNames(playerNames) {
  return playerNames
    .map((playerName, index) => `${index + 1}. ${playerName}`)
    .join("\n├");
}
