import { CommandInteraction } from "discord.js";
import { startConsole, catchConsole } from "../index.js";
import { PrismaClient } from "@prisma/client";

/**
 * @param {CommandInteraction} interaction
 */
export default async function getBanList(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("getBanList");
    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    await prisma.ban.findMany({
      where: {},
    });
  } catch (error) {
    catchConsole("getBanList", interaction, error);
  } finally {
    prisma.$disconnect();
  }
}
