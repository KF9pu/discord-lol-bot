import { PrismaClient } from "@prisma/client";
import { catchConsole, startConsole } from "../index.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function fn(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("fn");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    await setCommandLog(prisma, user_id, clan_id, "fn");
  } catch (error) {
    catchConsole("fn", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
