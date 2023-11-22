import { CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";

/**
 * @param {CommandInteraction} interaction
 */
export default async function join(interaction) {
  console.log("🚀 : join 시작");

  const prisma = new PrismaClient();

  try {
    console.log("🚀🚀🚀🚀 join start 🚀🚀🚀🚀");

    const user_id = parseInt(interaction.user.id);
    const guild_id = parseInt(interaction.guildId);

    await checkFirstJoin(prisma, user_id, guild_id);

    await joinGame();

    interaction.reply("💚 게임 참여 완료!");
  } catch (error) {
    console.log("❌ join catch ❌", error);
    interaction.reply("🖤 문제가 발생했군요! - 관리자에게 문의하세요");
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * @param {PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>} prisma
 * @param {number} user_id
 * @param {number} guild_id
 */
async function checkFirstJoin(prisma, user_id, guild_id) {
  const existingUser = await prisma.user.findUnique({
    where: { user_id },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        user_id,
        guild_id,
        victories: 0,
        defeats: 0,
        last_game_date: 0,
      },
    });
    console.log("🧡 : 내전 첫 참가로 유저 테이블 생성");
  } else {
    console.log("💛 : 이미 생성된 유저");
  }
}

async function joinGame() {}
