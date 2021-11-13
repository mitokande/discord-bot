module.exports = {
    category: 'Testing',
    description: 'Replies with AS', // Required for slash commands
    
    slash: 'both', // Create both a slash and legacy command
    //testOnly: false, // Only register a slash command for the testing guilds
    
    callback: ({ message, interaction }) => {
      const reply = 'AS!'
      const str = message.content.split(" ");
      // message is provided only for a legacy command
      if (str[2] == '+') {
        var x = parseInt(str[1]);
        var y = parseInt(str[3]);
        x = x + y;
        console.log(x);
        message.reply({
          content:  x.toString()
        })
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