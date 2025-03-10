const { Client, Intents } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice'); // استيراد مكتبة الصوت

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],
  checkUpdate: false,
});

const TOKEN = "MTMyNjI4MjM5ODI5OTU4NjYxMQ.G8GGhp.A1RGJvTpJc3g39ykcPvOB_y0wsec5Fx_18uwws"; // استبدل هذا بتوكن حسابك
const VOICE_CHANNEL_ID = "1312339948774359070";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // ابحث عن الغرفة الصوتية باستخدام الـ ID
  const voiceChannel = client.channels.cache.get(VOICE_CHANNEL_ID);

  if (voiceChannel && voiceChannel.type === 'GUILD_VOICE') { // التحقق من نوع القناة
    try {
      // انضم إلى الغرفة الصوتية
      const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false, // لا تضع نفسك على وضع "صامت"
        selfMute: false, // لا تضع نفسك على وضع "كتم"
      });
      console.log(`Joined voice channel: ${voiceChannel.name}`);
    } catch (error) {
      console.error('Failed to join voice channel:', error);
    }
  } else {
    console.log('Voice channel not found or is not a valid voice channel.');
  }
});

client.login(TOKEN);
