import { CommandInteraction } from "discord.js";
import {
  startConsole,
  catchConsole,
  getUnbannedChampions,
  getRemainingChampions,
  setCommandLog,
} from "../../index.js";
import { PrismaClient } from "@prisma/client";

/**
 * @param {CommandInteraction} interaction
 */
export default async function halfMirrorMode(interaction) {
  const prisma = new PrismaClient();

  try {
    startConsole("mirrorMode");

    const user_id = parseInt(interaction.user.id);
    const clan_id = parseInt(interaction.guildId);

    const unbannedChampions = await getUnbannedChampions(clan_id);
    const suffledChampions = unbannedChampions.sort(() => Math.random() - 0.5);

    const commonChapions = suffledChampions.slice(0, 10);

    const remainingChampions = getRemainingChampions(
      [...commonChapions.map(({ name }) => name)],
      suffledChampions
    );

    const resultCommonChapions = commonChapions
      .map(({ name }, index) => `${index + 1}. ${name}`)
      .join("\n├");

    const resultFirstTeamChampions = remainingChampions
      .slice(0, 10)
      .map(({ name }, index) => `${index + 1}. ${name}`)
      .join("\n├");

    const resultSecondTeamChampions = remainingChampions
      .slice(10, 20)
      .map(({ name }, index) => `${index + 1}. ${name}`)
      .join("\n├");

    await interaction.reply(
      "[🤎 하프미러모드]" +
        "\n┌" +
        `\n│[💚 공통 챔피언]` +
        `\n├${resultCommonChapions}` +
        "\n└" +
        "\n┌" +
        "\n│[💙 1팀]" +
        `\n├${resultFirstTeamChampions}` +
        "\n└" +
        "\n┌" +
        "\n│[💛 2팀]" +
        `\n├${resultSecondTeamChampions}` +
        "\n└"
    );

    await setCommandLog(prisma, user_id, clan_id, "nomalMode");
  } catch (error) {
    catchConsole("mirrorMode", interaction, error);
  }
}
