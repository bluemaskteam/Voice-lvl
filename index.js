const { Client, Intents } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],
  checkUpdate: false,
});
const TOKEN = "MTMyNjI4MjM5ODI5OTU4NjYxMQ.G16jB6.GnGx8VYloiVamd8fja97HBU5MgJ46ueEu10fpY";
const VOICE_CHANNEL_ID = "1312339948774359070";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const voiceChannel = client.channels.cache.get(VOICE_CHANNEL_ID);
  if (voiceChannel && voiceChannel.type === 'GUILD_VOICE') { 
    try {
      const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false, 
        selfMute: false, 
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
