import { PrismaClient } from "@prisma/client";
import { unixNow } from "hsh-utils-date";

/**
 * @name 커맨드로그등록
 * @description 커맨드 입력시 로그를 생성한다.
 *
 * @param {PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>} prisma
 * @param {number} user_id
 * @param {number} clan_id
 * @param {string} command_name
 */
export default async function setCommandLog(
  prisma,
  user_id,
  clan_id,
  command_name
) {
  try {
    await prisma.commandLog
      .create({
        data: { clan_id, user_id, command_name, command_dt: unixNow() },
      })
      .then(() => console.log("💚 commandLog 생성 완료"));
  } catch (error) {
    console.log("🖤 setCommandLog Error : ", error);
  }
}
