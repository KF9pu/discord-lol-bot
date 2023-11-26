import { CommandInteraction } from "discord.js";
import catchConsole from "../common/consoles/catchConsole.js";
import startConsole from "../common/consoles/startConsole.js";
import commands from "../../constants/commands.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function showAllModes(interaction) {
  try {
    startConsole("showAllModes");
    const gameModeCommands = commands.filter(({ gameMode }) => {
      return gameMode;
    });

    const gameModeCommandNames = gameModeCommands.map(
      ({ name, description }, index) =>
        `\n💙 ${index + 1}. ${name} : ${description}`
    );
    interaction.reply(`💚 게임모드 목록 \n${gameModeCommandNames}`);
  } catch (error) {
    catchConsole("showAllModes", interaction, error);
  }
}
