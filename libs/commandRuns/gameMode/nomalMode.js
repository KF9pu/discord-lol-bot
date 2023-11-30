import { CommandInteraction } from "discord.js";
import {
  catchConsole,
  startConsole,
  getChampionsByPosition,
  getRemainingChampions,
  getUnbannedChampions,
} from "../../index.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function nomalMode(interaction) {
  try {
    startConsole("nomalMode");
    const staticTypes = ["Tank", "Support", "Marksman"]; // 최소한 원딜/탱커/서폿이 나올 수 있도록 지정 포시션

    const unbannedChampions = await getUnbannedChampions();

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
      [...firstTeamStaticChampions, ...secondTeamStaticChampions],
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
      `
      💚 각 팀별 챔피언 목록이에요!\n
      💙 1팀\n${firstTeamResultChampions}\n
      💛 2팀\n${secondTeamResultChampions}
      `
    );
  } catch (error) {
    catchConsole("nomalMode", interaction, error);
  }
}
