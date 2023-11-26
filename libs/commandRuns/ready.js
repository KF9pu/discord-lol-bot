import { PrismaClient } from "@prisma/client";
import { CommandInteraction } from "discord.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function ready(interaction) {
  const prisma = new PrismaClient();

  try {
    await interaction.reply("모든팀을 [대기] 채널로 이동 시켰습니다.");
  } catch (error) {
  } finally {
    await prisma.$disconnect();
  }
}
