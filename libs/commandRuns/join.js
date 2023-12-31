import { CommandInteraction } from "discord.js";
import { PrismaClient } from "@prisma/client";
import { unixNow } from "hsh-utils-date";
import { startConsole, catchConsole, setCommandLog } from "../index.js";

/**
 * @param {CommandInteraction} interaction
 */
export default async function join(interaction) {
  const prisma = new PrismaClient();

  try {
    startConsole("join");
    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);
    const user_nickname =
      interaction.user.globalName ?? interaction.user.username;

    await joinGame(prisma, user_id, clan_id, user_nickname)
      .then(() => interaction.reply("💚 게임 참여 완료!"))
      .then(() => setCommandLog(prisma, user_id, clan_id, "join"));
  } catch (error) {
    catchConsole("join", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * @param {PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>} prisma
 * @param {number} user_id
 * @param {number} clan_id
 * @param {string} user_nickname
 */
async function joinGame(prisma, user_id, clan_id, user_nickname) {
  try {
    await prisma.$transaction([
      prisma.user.upsert({
        where: {
          user_id_clan_id: {
            user_id,
            clan_id,
          },
        },
        update: {
          user_name: user_nickname,
        },
        create: {
          user_id,
          clan_id,
          user_name: user_nickname,
          create_dt: unixNow(),
        },
      }),
      prisma.player.upsert({
        where: {
          user_id_clan_id: {
            user_id,
            clan_id,
          },
        },
        update: {
          join_dt: unixNow(),
        },
        create: {
          user_id,
          clan_id,
          user_name: user_nickname,
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
