import { PrismaClient } from "@prisma/client";
import { CommandInteraction } from "discord.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function mirrorMode(interaction) {
  const prisma = new PrismaClient();

  try {
    console.log("🚀🚀🚀🚀 mirrorMode start 🚀🚀🚀🚀");
    await interaction.reply("mirrorMode");
  } catch (error) {
    console.log("❌ mirrorMode catch ❌", error);
    interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
  } finally {
    await prisma.$disconnect();
  }
}
