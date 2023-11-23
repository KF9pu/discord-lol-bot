import { CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";

/**
 * @param {CommandInteraction} interaction
 */
export default async function gameEnd(interaction) {
  const prisma = new PrismaClient();

  try {
    console.log("🚀🚀🚀🚀 gameEnd start 🚀🚀🚀🚀");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);
  } catch (error) {
    console.log("❌ gameEnd catch ❌", error);
    interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
  } finally {
    await prisma.$disconnect();
  }
}
