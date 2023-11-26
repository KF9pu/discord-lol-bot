import { CommandInteraction } from "discord.js";
import prismaBundler from "../prismaBundler";

/**
 * @param {CommandInteraction} interaction
 */
export default async function showAllModes(interaction) {
  await prismaBundler(interaction, "showAllModes", () => {});
}
