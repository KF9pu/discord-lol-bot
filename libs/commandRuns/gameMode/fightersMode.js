import { CommandInteraction } from "discord.js";
import {
  startConsole,
  catchConsole,
  getUnbannedChampions,
  setCommandLog,
  suffledArray,
} from "../../index.js";
import { PrismaClient } from "@prisma/client";
/**
 * @param {CommandInteraction} interaction
 */
export default async function fightersMode(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("fightersMode");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    const unbannedChampions = await getUnbannedChampions(clan_id);

    const fighters = suffledArray(
      unbannedChampions.filter(({ tags }) => tags.includes("Fighter" || "Tank"))
    );

    const fightersChampions = fighters
      .slice(0, 20)
      .map(({ name }, index) => `├${index + 1}. ${name}`)
      .join("\n");

    await interaction.reply(
      "[🤎 땀내 모드]" +
        "\n[💛 모드 설명 : 탱커과 파이터로 이루어진 챔피언 리스트로 조합을 짜는 모드]\n" +
        `\n💚 챔피언 리스트` +
        "\n┌" +
        `\n${fightersChampions}` +
        "\n└"
    );

    await setCommandLog(prisma, user_id, clan_id, "fightersMode");
  } catch (error) {
    catchConsole("fightersMode", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
