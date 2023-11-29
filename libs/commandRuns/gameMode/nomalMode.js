import { PrismaClient } from "@prisma/client";
import { CommandInteraction } from "discord.js";
import getChampionsByPosition from "../../common/util/getChampionsByPosition.js";
import getRemainingChampions from "../../common/util/getRemainingChampions.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function nomalMode(interaction) {
  const prisma = new PrismaClient();

  try {
    console.log("🚀🚀🚀🚀 nomalMode start 🚀🚀🚀🚀");
    const staticTypes = ["Tank", "Support", "Marksman"]; // 최소한 원딜/탱커/서폿이 나올 수 있도록 지정 포시션

    const championsByPosition = getChampionsByPosition(staticTypes);

    const firstTeamStaticChampions = [
      championsByPosition[staticTypes[0]][0],
      championsByPosition[staticTypes[1]][0],
      championsByPosition[staticTypes[2]][0],
    ];
    console.log(
      "🚀 ~ file: nomalMode.js:23 ~ nomalMode ~ firstTeamStaticChampions:",
      firstTeamStaticChampions
    );
    const secondTeamStaticChampions = [
      championsByPosition[staticTypes[0]][1],
      championsByPosition[staticTypes[1]][1],
      championsByPosition[staticTypes[2]][1],
    ];
    console.log(
      "🚀 ~ file: nomalMode.js:29 ~ nomalMode ~ secondTeamStaticChampions:",
      secondTeamStaticChampions
    );

    const remainingChampions = getRemainingChampions([
      ...firstTeamStaticChampions,
      ...secondTeamStaticChampions,
    ]);

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
    console.log("❌ nomalMode catch ❌", error);
    interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
  } finally {
    await prisma.$disconnect();
  }
}
