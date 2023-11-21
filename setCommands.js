import { REST, Routes } from "discord.js";
import "dotenv/config";
import commands from "./constants/commands.js";

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
console.log(
  "🚀 ~ file: commands.js:11 ~ process.env.TOKEN:",
  process.env.TOKEN
);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}