const DiscordJS = require('discord.js')
const dotenv=require('dotenv')
const WOKCommands = require('wokcommands')
var fs = require('fs');

dotenv.config()
const path = require('path')
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new DiscordJS.Client({
    // These intents are recommended for the built in help menu
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
  });
  const row2 = new DiscordJS.MessageActionRow()
  .addComponents(
    new DiscordJS.MessageButton()
      .setCustomId('smash')
      .setLabel('smash')
      .setStyle('PRIMARY'),
    new DiscordJS.MessageButton()
      .setCustomId('pass')
      .setLabel('pass')
      .setStyle('SECONDARY'),
  );
  client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if(interaction.customId === 'smash'){
      const str = interaction.message.content.split(" ");
      var count = parseInt(str[1])+1;
      console.log(interaction.message.content);
      interaction.update({ content:'SMASHED '+ count  + " " + str[2], embeds:[],components: [row2] });
      //interaction.reply('smashed');
    }
    if(interaction.customId === 'smasp'){
      const str = interaction.message.content.split(" ");
      var count = parseInt(str[2])+1;
      console.log(interaction.message.content);
      interaction.update({ content:"Smash Count!: "+ count, embeds:[],components: [row2] });
      //interaction.reply('smashed');
    }
    if(interaction.customId === 'pass'){
      console.log(interaction.message.content);
      interaction.update({ content: 'PASSED', embeds:[],components: [] });
    }
  });
  client.on('ready', () => {

    new WOKCommands(client, {
      // The name of the local folder for your command files
      commandsDir: path.join(__dirname, 'commands'),
      // What guilds your slash commands will be created in
     
    })
  });


client.login(process.env.BOT_TOKEN);