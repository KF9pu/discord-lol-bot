import { CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";

/**
 * @param {CommandInteraction} interaction
 */
export default async function showAllModes(interaction) {
  const prisma = new PrismaClient();

  try {
    console.log("🚀🚀🚀🚀 showAllModes start 🚀🚀🚀🚀");
    await interaction.reply("showAllModes");
  } catch (error) {
    console.log("❌ showAllModes catch ❌", error);
    interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
  } finally {
    await prisma.$disconnect();
  }
}
