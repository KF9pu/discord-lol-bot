import { CommandInteraction } from "discord.js";
import { startConsole, catchConsole, setCommandLog } from "../index.js";
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

    await prisma.ban
      .deleteMany({
        where: {
          clan_id,
        },
      })
      .then(() => interaction.reply("💚 밴 목록이 초기화 되었어요 !"))
      .then(() => setCommandLog(prisma, user_id, clan_id, "resetBanList"));
  } catch (error) {
    catchConsole("resetBanList", interaction, error);
  } finally {
    prisma.$disconnect();
  }
}
