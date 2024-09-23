import dotenv from 'dotenv'; 
dotenv.config(); 

const TOKEN = process.env.TOKEN; 

import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client(
  {
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent]
  }
);

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  message.reply("hii shub bot")

});

client.on('interactionCreate', (interaction) => {
  interaction.reply("Pong!!")
})

client.login(TOKEN);