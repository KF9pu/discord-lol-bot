import { CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";
import { startConsole, catchConsole, setCommandLog } from "../index.js";

/**
 * @name 플레이어초기화
 * @param {CommandInteraction} interaction
 * @description 해당 클랜의 player 테이블 데이터를 초기화한다.
 */
export default async function resetPlayer(interaction) {
  const prisma = new PrismaClient();

  try {
    startConsole("resetPlayer");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    await prisma.player
      .deleteMany({
        where: {
          clan_id,
        },
      })
      .then(() => interaction.reply("💚 플레이어 초기화 완료!"))
      .then(() => setCommandLog(prisma, user_id, clan_id, "resetPlayer"));
  } catch (error) {
    catchConsole("resetPlayer", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
