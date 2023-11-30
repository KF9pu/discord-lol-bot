import { PrismaClient } from "@prisma/client";
import allChamps from "../../../constants/allChamps.js";

export default async function getUnbannedChampions(clan_id) {
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

    const banListNames = banList.map(({ champion_name }) => champion_name);

    return allChamps.filter(({ name }) => !banListNames.includes(name));
  } catch (error) {
    console.log("💔💔💔💔 [getUnbannedChampions] error 💔💔💔💔");
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
