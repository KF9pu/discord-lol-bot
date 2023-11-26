import { PrismaClient } from "@prisma/client";
import { CommandInteraction } from "discord.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function pickRandomMode(interaction) {
  const prisma = new PrismaClient();

  try {
  } catch (error) {
  } finally {
    await prisma.$disconnect();
  }
  await interaction.reply("pickRandomMode");
}
