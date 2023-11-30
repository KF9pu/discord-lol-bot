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
    const unbannedChampions = await getUnbannedChampions();

    await interaction.reply("twoRandomChampionsMode");
  } catch (error) {
    catchConsole("twoRandomChampionsMode", interaction, error);
  }
}
