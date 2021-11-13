const DiscordJS = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'Replies with BOO', // Required for slash commands
    
    slash: 'both', // Create both a slash and legacy command
   // testOnly: false, // Only register a slash command for the testing guilds
    
    callback: ({ message, interaction }) => {
      const reply = 'Smash Count: 0'
      const embed = new DiscordJS.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('A Wild Çekik Abla appeared!!!')
			.setURL('https://discord.js.org')
			.setDescription('Smash or Pass');
      const row = new DiscordJS.MessageActionRow()
			.addComponents(
				new DiscordJS.MessageButton()
					.setCustomId('smashp')
					.setLabel('smash')
					.setStyle('PRIMARY'),
			);
      const row2 = new DiscordJS.MessageActionRow()
			.addComponents(
        new DiscordJS.MessageButton()
					.setCustomId('smasp')
					.setLabel('smash')
					.setStyle('PRIMARY'),
				new DiscordJS.MessageButton()
					.setCustomId('pass')
					.setLabel('pass')
					.setStyle('SECONDARY'),
			);
      // message is provided only for a legacy command
      if (message) {
        message.reply({
          content: reply,
          embeds: [embed],
          components: [row2]
        })
        return
      }
  
      // interaction is provided only for a slash command
      interaction.reply({
        content: reply
       
      })
      
      // Alternatively we can just simply return our reply object
      // OR just a string as the content.
      // WOKCommands will handle the proper way to reply with it
      return {
        content: reply
      }
    },
  }