const Discord = require("discord.js")
const commando = require('discord.js-commando')
const superagent = require('superagent')
class MemeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'meme',
            group: 'simple',
            memberName: 'meme',
            description:  'Want see a meme?',
        });
    }

    async run(message, args)
    {

        let {body} = await superagent
        .get('https://api-to.get-a.life/meme')
        console.log(body.url);       
         {
            let dEmbed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor('Sky Bot!', message.guild.iconURL)
            .setImage(body.url)
            .setTimestamp()
            .setFooter('Sky Bot!', this.client.user.displayAvatarURL)

            message.channel.send(dEmbed)
        }
    
    
    }
}
module.exports = MemeCommand;