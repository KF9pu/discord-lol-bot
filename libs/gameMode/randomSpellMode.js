import { CommandInteraction } from "discord.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function randomSpellMode(interaction) {
  await interaction.reply("randomSpellMode");
}
