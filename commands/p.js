const DiscordJS = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'Replies with AS', // Required for slash commands
    
    slash: 'both', // Create both a slash and legacy command
    //testOnly: false, // Only register a slash command for the testing guilds
    
    callback: ({ message, interaction }) => {
      
      // message is provided only for a legacy command
      if (message) {
        const button = new DiscordJS.MessageActionRow()
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
        const str = message.content.split(" ");

        'use strict';
        var request = require('request');
        
        var url = 'https://api.pinterest.com/v3/pidgets/boards/ewong1110/ulzzang/pins/?page_size=250';
        
        request.get({
            url: url,
            json: true,
            headers: {'User-Agent': 'request'}
          }, (err, res, data) => {
            if (err) {
              console.log('Error:', err);
            } else if (res.statusCode !== 200) {
              console.log('Status:', res.statusCode);
            } else {
              // data is already parsed as JSON:
              console.log(data.data.pins[str[1]].images["564x"].url);
              message.reply({
                content:  'Smashed: 0 \n' + data.data.pins[str[1]].images["564x"].url,
                components:[button]
              })
            }
        });
        
        return
      }
      
      if(interaction){
      // interaction is provided only for a slash command
      interaction.reply({
        content: reply
      })
    }
      // Alternatively we can just simply return our reply object
      // OR just a string as the content.
      // WOKCommands will handle the proper way to reply with it
      return {
        content: reply
      }
    },
  }