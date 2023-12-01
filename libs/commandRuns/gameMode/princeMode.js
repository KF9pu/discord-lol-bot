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
export default async function princeMode(interaction) {
  const prisma = new PrismaClient();
  try {
    startConsole("princeMode");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    const unbannedChampions = await getUnbannedChampions(clan_id);

    const supportChampions = suffledArray(
      unbannedChampions.filter(({ tags }) => tags.includes("Support"))
    );
    const pickedSupportChampions = supportChampions
      .slice(0, 10)
      .map(({ name }, index) => `├${index + 1}. ${name}`)
      .join("\n");
    const princeChampions = suffledArray(
      unbannedChampions.filter(
        champion =>
          champion.tags.includes("Marksman") &&
          !supportChampions.includes(champion)
      )
    );
    const pickedPrinceChampions = princeChampions
      .slice(0, 4)
      .map(({ name }, index) => `├${index + 1}. ${name}`)
      .join("\n");

    await interaction.reply(
      "[🤎 왕자님 모드]" +
        "\n[💛 모드 설명 : 왕자님에서 1개 서폿들에서 나머지를 선택하여 조합을 짜는 모드]\n" +
        `\n💚 왕자님` +
        "\n┌" +
        `\n${pickedPrinceChampions}` +
        "\n└" +
        `\n💙 서폿들` +
        "\n┌" +
        `\n${pickedSupportChampions}` +
        "\n└"
    );

    await setCommandLog(prisma, user_id, clan_id, "princeMode");
  } catch (error) {
    catchConsole("princeMode", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
