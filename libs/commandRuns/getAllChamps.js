import { CommandInteraction } from "discord.js";
import { startConsole, catchConsole } from "../index.js";
import allChamps from "../../constants/allChamps.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function getAllChamps(interaction) {
  try {
    startConsole("getAllChamps");
    const allChampNames = allChamps.map(
      ({ name }, index) => `${index + 1}. ${name}`
    );
    // console.log(
    //   "🚀 ~ file: getAllChamps.js:15 ~ getAllChamps ~ allChampNames:",
    //   allChampNames
    // );
    await interaction.reply(`💚 챔피언 목록\n${allChampNames.join("\n")}`);
  } catch (error) {
    catchConsole("getAllChamps", interaction, error);
  }
}
