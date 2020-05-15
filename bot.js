var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();
 if(message.author.id != "710884980422738089" && message.channel.id === "656726464091258881"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "bang" && message.channel.id === "656726464091258881"){
                message.channel.send('BOOM!!!!!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand >bang right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '>' dot.");
        }
    }
});
bot.login(process.env.BOT_TOKEN)
