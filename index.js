import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import commands from "./constants/commands.js";
import { pattern_join } from "./constants/patterns.js";
import { isMaches } from "./libs/index.js";
/**
  datasource db {
    provider = "mysql"
    url = "mysql://7eylbtvhvwkebzs0m2bq:pscale_pw_HdPImxIW3fP3T1jcQZewfWjBWUNj897LGUJBzSioXUX@gcp.connect.psdb.cloud/myapp?sslaccept=strict"
  }
 */
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

  const { run } = commands.find(cmd => cmd.name === interaction.commandName);

  try {
    if (isMaches(interaction.commandName, pattern_join)) run(interaction);
  } catch (error) {
    interaction.reply("💥 문제가 생겼어요!");
  }
});

client.login(process.env.TOKEN);
