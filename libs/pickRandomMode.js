import { CommandInteraction } from "discord.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function pickRandomMode(interaction) {
  await interaction.reply("pickRandomMode");
}
