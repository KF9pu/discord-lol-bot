import { CommandInteraction } from "discord.js";

/**
 * @param {string} interactionName
 * @param {CommandInteraction} interaction
 * @param {*} error
 */
export default function catchConsole(interactionName, interaction, error) {
  console.log(`❌❌❌ ${interactionName} catch ❌❌❌`, error);
  interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
}
