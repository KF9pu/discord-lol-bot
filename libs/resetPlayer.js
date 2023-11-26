import { CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";
import setCommandLog from "./setCommandLog.js";

/**
 * @name 플레이어초기화
 * @param {CommandInteraction} interaction
 * @description 해당 클랜의 player 테이블 데이터를 초기화한다.
 */
export default async function resetPlayer(interaction) {
  const prisma = new PrismaClient();

  try {
    console.log("🚀🚀🚀🚀 resetPlayer start 🚀🚀🚀🚀");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    await prisma.player
      .deleteMany({
        where: {
          clan_id,
        },
      })
      .then(() => interaction.reply("💚 플레이어 초기화 완료!"))
      .then(() => setCommandLog(prisma, user_id, clan_id, "join"));
  } catch (error) {
    console.log("❌ resetPlayer catch ❌", error);
    interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
  } finally {
    await prisma.$disconnect();
  }
}
