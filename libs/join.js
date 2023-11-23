import { CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";
import { unixNow, unixTodayStart, unixTomorrowStart } from "hsh-utils-date";

/**
 * @param {CommandInteraction} interaction
 */
export default async function join(interaction) {
  console.log("🚀 : join 시작");

  const prisma = new PrismaClient();

  try {
    console.log("🚀🚀🚀🚀 join start 🚀🚀🚀🚀");

    const user_id = parseInt(interaction.user.id);
    const user_nickname = interaction.user.globalName;
    const guild_id = parseInt(interaction.guildId);

    await joinGame(prisma, user_id, guild_id, user_nickname)
      .then(() => interaction.reply("💚 게임 참여 완료!"))
      .catch(() => interaction.reply("🧡 게임 참여 실패!"));
    // interaction.reply("💚 게임 참여 완료!");
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
 * @param {string} user_nickname
 */
async function joinGame(prisma, user_id, guild_id, user_nickname) {
  try {
    await prisma.$transaction([
      prisma.user.upsert({
        where: {
          user_id_guild_id: {
            user_id,
            guild_id,
          },
        },
        update: {
          user_name: user_nickname,
        },
        create: {
          user_id,
          guild_id,
          user_name: user_nickname,
          create_dt: unixNow(),
        },
      }),
      prisma.player.upsert({
        where: {
          user_id_guild_id: {
            user_id,
            guild_id,
          },
        },
        update: {
          join_dt: unixNow(),
        },
        create: {
          user_id,
          guild_id,
          team: 0,
          join_dt: unixNow(),
        },
      }),
    ]);

    console.log("데이터 추가 및 업데이트 성공");
  } catch (error) {
    console.error("데이터 추가 및 업데이트 실패", error);
  }
}
