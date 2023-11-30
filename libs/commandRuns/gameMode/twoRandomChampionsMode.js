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

    const firstTeamStaticChapions = suffledChampions
      .slice(0, 2)
      .map(({ name }, index) => `${index + 1}. ${name}`)
      .join("\n");

    const secondTeamStaticChapions = suffledChampions
      .slice(2, 4)
      .map(({ name }, index) => `${index + 1}. ${name}`)
      .join("\n");

    await interaction.reply(
      `
      💚 각 팀별 고정 챔피언 목록이에요!\n
      💙 1팀\n${firstTeamStaticChapions}\n
      💛 2팀\n${secondTeamStaticChapions}
      `
    );
  } catch (error) {
    catchConsole("twoRandomChampionsMode", interaction, error);
  }
}
