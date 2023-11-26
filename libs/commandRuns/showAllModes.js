import { PrismaClient } from "@prisma/client";
import { CommandInteraction } from "discord.js";
import catchConsole from "../common/consoles/catchConsole";
import startConsole from "../common/consoles/startConsole";

/**
 * @param {CommandInteraction} interaction
 */
export default async function showAllModes(interaction) {
  const prisma = new PrismaClient();

  try {
    startConsole("showAllModes");
  } catch (error) {
    catchConsole("showAllModes", interaction, error);
  } finally {
    await prisma.$disconnect();
  }
}
