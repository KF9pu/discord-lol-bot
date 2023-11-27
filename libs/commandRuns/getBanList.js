import { CommandInteraction } from "discord.js";
import { startConsole, catchConsole, setCommandLog } from "../index.js";
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

    await prisma.ban
      .findMany({
        where: {
          clan_id,
        },
        orderBy: {
          ban_dt: "asc",
        },
      })
      .then(banList =>
        banList.map(
          ({ champion_name }, index) => `${index + 1}.${champion_name}`
        )
      )
      .then(banChampNames => banChampNames.join("\n"))
      .then(banChampNames => interaction.reply(`💚 밴 목록\n${banChampNames}`))
      .then(() => setCommandLog(prisma, user_id, clan_id, "getBanList"));
  } catch (error) {
    catchConsole("getBanList", interaction, error);
  } finally {
    prisma.$disconnect();
  }
}
