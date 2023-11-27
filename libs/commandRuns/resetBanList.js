import { CommandInteraction } from "discord.js";
import { startConsole, catchConsole } from "../index.js";
import { PrismaClient } from "@prisma/client";

/**
 * @param {CommandInteraction} interaction
 */
export default async function resetBanList(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("resetBanList");
    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);
  } catch (error) {
    catchConsole("resetBanList", interaction, error);
  } finally {
    prisma.$disconnect();
  }
}
