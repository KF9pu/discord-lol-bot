import { CommandInteraction } from "discord.js";
import startConsole from "../common/consoles/startConsole.js";
import catchConsole from "../common/consoles/catchConsole.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function getAllChamps(interaction) {
  try {
    startConsole("getAllChamps");
    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);
  } catch (error) {
    catchConsole("getAllChamps", interaction, error);
  }
}
