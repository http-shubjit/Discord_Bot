import dotenv from 'dotenv'; // Import dotenv for environment variables
dotenv.config(); // Load environment variables from .env file

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
]; 

const rest = new REST({ version: '10' }).setToken(TOKEN);


(async () => {
    try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
})()