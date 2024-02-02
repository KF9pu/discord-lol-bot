import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import commands from "./constants/commands.js";
import keywordsToCheck from "./constants/keywordsToCheck.js";
import handleKeyword from "./libs/common/handlers/handleKeyword.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", async () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("messageCreate", async msg => {
  if (msg.author.bot) return;

  for (const keyword of keywordsToCheck) {
    if (msg.content.includes(keyword)) {
      const replyMessage = handleKeyword(msg, keyword);
      if (replyMessage) msg.reply(replyMessage);
      break; // 한 번이라도 키워드가 일치하면 루프 종료
    }
  }
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;
  if (!interaction.isChatInputCommand()) return;

  try {
    const { run } = commands.find(cmd => cmd.name === interaction.commandName);
    run(interaction);
  } catch (error) {
    interaction.reply("💥 문제가 생겼어요!");
  }
});

client.login(process.env.TOKEN);
