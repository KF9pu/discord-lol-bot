import { CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";

/**
 * @param {CommandInteraction} interaction
 */
export default async function getJoinMemberList(interaction) {
  const prisma = new PrismaClient();

  try {
    interaction.reply("✨ 클랜 정보");
  } catch (error) {
    interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
  } finally {
    await prisma.$disconnect();
  }
}
