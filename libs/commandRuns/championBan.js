import { PrismaClient } from "@prisma/client";
import { Message } from "discord.js";
import { unixNow } from "hsh-utils-date";
import { isMatch } from "hsh-utils-string";
import startConsole from "../common/consoles/startConsole.js";
import allChamps from "../../constants/allChamps.js";
import setCommandLog from "./setCommandLog.js";
/**
 * @param {string} championName
 * @param {Message<boolean>} msg
 */
export default async function championBan(msg) {
  const prisma = new PrismaClient();

  try {
    startConsole("championBan");
    const champNameRegex = /!(\S+)밴/;
    const match = isMatch(msg.content, champNameRegex);
    if (!match) return;

    const user_id = parseInt(msg.author.id);
    const clan_id = parseInt(msg.guildId);
    const champName = match ? match[1] : null;
    const isExistence = checkChampsExistence(champName);

    if (!isExistence) return "🧡 챔피언 이름을 확인해 주세요.";
    else {
      return await prisma.ban
        .upsert({
          where: {
            champion_name_clan_id: {
              clan_id,
              champion_name: champName,
            },
          },
          update: {
            ban_dt: unixNow(),
          },
          create: {
            clan_id,
            champion_name: champName,
            ban_dt: unixNow(),
          },
        })
        .then(() => {
          setCommandLog(prisma, user_id, clan_id, "championBan");
          return `💚 [${champName}] 밴 완료 !`;
        })
        .catch(err => {
          console.log("🚀 ~ file: championBan.js:41 ~ championBan ~ err:", err);
        });
    }
  } catch (error) {
    // console.log(`❌❌❌championBan catch ❌❌❌`, error);
    return;
  }
}

/**
 * @param {string} champName
 * @returns {boolean}
 */
function checkChampsExistence(champName) {
  const allChampNames = allChamps.map(({ name }) => name);
  const isExistence = allChampNames.includes(champName);

  return isExistence;
}
