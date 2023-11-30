import { CommandInteraction } from "discord.js";
import { catchConsole, startConsole, suffledArray } from "../../index.js";
import commands from "../../../constants/commands.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function pickRandomMode(interaction) {
  try {
    startConsole("pickRandomMode");
    const gameModes = commands.filter(
      ({ gameMode, name }) => gameMode && !name.includes("랜덤모드")
    );

    suffledArray;
    const suffledGameMode = suffledArray(gameModes);
    suffledGameMode[0].run(interaction);
  } catch (error) {
    catchConsole("pickRandomMode", interaction, error);
  }
}
