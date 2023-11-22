import { CommandInteraction } from "discord.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function getJoinMemberList(interaction) {
  await interaction.reply("getJoinMemberList");
}
