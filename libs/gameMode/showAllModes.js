import { CommandInteraction } from "discord.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function showAllModes(interaction) {
  await interaction.reply("showAllModes");
}
