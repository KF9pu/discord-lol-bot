import { CommandInteraction } from "discord.js";
import {
  catchConsole,
  startConsole,
  getUnbannedChampions,
} from "../../index.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function twoRandomChampionsMode(interaction) {
  try {
    startConsole("twoRandomChampionsMode");
    const clan_id = parseInt(interaction.guildId);
    const unbannedChampions = await getUnbannedChampions(clan_id);
    const suffledChampions = unbannedChampions.sort(() => Math.random() - 0.5);

    const firstTeamStaticChapion = suffledChampions
      .slice(0, 2)
      .map(({ name }, index) => `${index}. ${name}`)
      .join("\n");

    const secondTeamStaticChapion = suffledChampions
      .slice(2, 4)
      .map(({ name }, index) => `${index}. ${name}`)
      .join("\n");

    await interaction.reply(
      `
      💚 각 팀별 고정 챔피언 목록이에요!\n
      💙 1팀\n${firstTeamStaticChapion}\n
      💛 2팀\n${secondTeamStaticChapion}
      `
    );
  } catch (error) {
    catchConsole("twoRandomChampionsMode", interaction, error);
  }
}
