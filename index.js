import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import commands from "./constants/commands.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;
  if (!interaction.isChatInputCommand()) return;

  console.log("🚀 : 시작이 좋아~");

  try {
    const { run } = commands.find(cmd => cmd.name === interaction.commandName);
    run(interaction);
  } catch (error) {
    interaction.reply("💥 문제가 생겼어요!");
  }
});

client.login(process.env.TOKEN);
