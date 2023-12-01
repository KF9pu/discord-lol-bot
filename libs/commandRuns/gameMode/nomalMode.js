import { CommandInteraction } from "discord.js";
import {
  catchConsole,
  startConsole,
  getChampionsByPosition,
  getRemainingChampions,
  getUnbannedChampions,
  setCommandLog,
} from "../../index.js";
import { PrismaClient } from "@prisma/client";

/**
 * @param {CommandInteraction} interaction
 */
export default async function nomalMode(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("nomalMode");
    const staticTypes = ["Tank", "Support", "Marksman"]; // 최소한 원딜/탱커/서폿이 나올 수 있도록 지정 포시션

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    const unbannedChampions = await getUnbannedChampions(clan_id);

    const championsByPosition = getChampionsByPosition(
      staticTypes,
      unbannedChampions
    );

    const firstTeamStaticChampions = [
      championsByPosition[staticTypes[0]][0],
      championsByPosition[staticTypes[1]][0],
      championsByPosition[staticTypes[2]][0],
    ];

    const secondTeamStaticChampions = [
      championsByPosition[staticTypes[0]][1],
      championsByPosition[staticTypes[1]][1],
      championsByPosition[staticTypes[2]][1],
    ];

    const remainingChampions = getRemainingChampions(
      [
        ...firstTeamStaticChampions.map(({ name }) => name),
        ...secondTeamStaticChampions.map(({ name }) => name),
      ],
      unbannedChampions
    );

    const firstTeamResultChampions = [
      ...firstTeamStaticChampions,
      ...remainingChampions.slice(0, 12),
    ]
      .map(({ name }, index) => `${index}. ${name}`)
      .join("\n");

    const secondTeamResultChampions = [
      ...secondTeamStaticChampions,
      ...remainingChampions.slice(12, 24),
    ]
      .map(({ name }, index) => `${index}. ${name}`)
      .join("\n");

    await interaction.reply(
      "[🤎 기본모드]" +
        "\n[💛 모드 설명 : 각팀에게 주어진 챔피언들로 조합을 짜는 모드]\n" +
        `\n💚 각 팀별 챔피언 목록이에요!\n` +
        `\n💙 1팀\n${firstTeamResultChampions}` +
        `\n💛 2팀\n${secondTeamResultChampions}`
    );

    await setCommandLog(prisma, user_id, clan_id, "nomalMode");
  } catch (error) {
    catchConsole("nomalMode", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
