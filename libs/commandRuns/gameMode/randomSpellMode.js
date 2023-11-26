import { PrismaClient } from "@prisma/client";
import { CommandInteraction } from "discord.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function randomSpellMode(interaction) {
  const prisma = new PrismaClient();

  try {
    console.log("🚀🚀🚀🚀 randomSpellMode start 🚀🚀🚀🚀");
    await interaction.reply("randomSpellMode");
  } catch (error) {
    console.log("❌ randomSpellMode catch ❌", error);
    interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
  } finally {
    await prisma.$disconnect();
  }
}
