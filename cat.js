const Discord = require("discord.js")
const commando = require('discord.js-commando')
const superagent = require('superagent')
class CatCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'cat',
            group: 'simple',
            memberName: 'cat',
            description:  'Want see a cat?',
        });
    }

    async run(message, args)
    {

        let {body} = await superagent
        .get('http://aws.random.cat/meow')
        //console.log(body.file)
    
        {
            let dEmbed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor('Sky Bot!', message.guild.iconURL)
            .setImage(body.file)
            .setTimestamp()
            .setFooter('Sky Bot!', this.client.user.displayAvatarURL)

            message.channel.send(dEmbed)
        }
    
    
    }
}
module.exports = CatCommand;