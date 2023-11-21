import { PrismaClient } from "@prisma/client";
export default async function getMode(msg) {
  const prisma = new PrismaClient();

  try {
    console.log("🚀🚀🚀🚀 getMode start 🚀🚀🚀🚀");
  } catch (error) {
    console.log("❌ getMode catch ❌");
  } finally {
    await prisma.$disconnect();
  }

  msg.reply("");
}
