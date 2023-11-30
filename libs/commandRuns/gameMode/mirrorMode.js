import { CommandInteraction } from "discord.js";
import {
  startConsole,
  catchConsole,
  getUnbannedChampions,
} from "../../index.js";
/**
 * @param {CommandInteraction} interaction
 */
export default async function mirrorMode(interaction) {
  try {
    startConsole("mirrorMode");
    const clan_id = parseInt(interaction.guildId);
    const unbannedChampions = await getUnbannedChampions(clan_id);
    const suffledChampions = unbannedChampions.sort(() => Math.random() - 0.5);

    const resultChapions = suffledChampions
      .slice(0, 20)
      .map(({ name }, index) => `💙 ${index + 1}. ${name}`)
      .join("\n");
    await interaction.reply(
      `
        💚 공통 챔피언 목록이에요!
        \n${resultChapions}
        `
    );
  } catch (error) {
    catchConsole("mirrorMode", interaction, error);
  }
}
