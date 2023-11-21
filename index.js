import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
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

  if (interaction.commandName === "ping") {
    if (interaction.guild) {
      // 봇이 속한 서버의 음성 채널을 얻습니다.
      const voiceChannels = interaction.guild.channels.cache.filter(
        channel => channel.type === 2
      );
      console.log("🚀 ~ file: index.js:25 ~ voiceChannels:", voiceChannels);
      console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
      console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
      console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
      console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
      console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
      console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
      console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");

      // 첫 번째 음성 채널을 기본값으로 설정합니다.
      const targetChannel = voiceChannels.first();
      console.log(
        "🚀 ~ file: index.js:28 ~ targetChannel:",
        targetChannel.members
      );

      // 음성 채널에 멤버가 있는지 확인합니다.
      if (targetChannel) {
        const membersInChannel = targetChannel.members.map(
          member => member.displayName
        );
        await interaction.reply(
          `[${
            targetChannel.name
          }] 채널에 있는 멤버 목록: ${membersInChannel.join(", ")}`
        );
      } else {
        await interaction.reply("음성 채널에 멤버가 없습니다.");
      }
    } else {
      await interaction.reply("서버에 속해 있지 않습니다.");
    }
  }
});

client.login(process.env.TOKEN);
