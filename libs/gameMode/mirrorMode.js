import { CommandInteraction } from "discord.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function mirrorMode(interaction) {
  await interaction.reply("mirrorMode");
}
