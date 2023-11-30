import { PrismaClient } from "@prisma/client";
import allChamps from "../../../constants/allChamps.js";

export default async function getUnbannedChampions() {
  const prisma = new PrismaClient();

  try {
    const banList = await prisma.ban.findMany({
      where: {
        clan_id,
      },
      orderBy: {
        ban_dt: "asc",
      },
    });

    return allChamps.filter(champion => banList.includes(champion));
  } catch (error) {
    console.log("💔💔💔💔 [getUnbannedChampions] error 💔💔💔💔");
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
