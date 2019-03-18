const Discord = require("discord.js")
const commando = require('discord.js-commando')
const superagent = require('superagent')
class DogCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dog',
            group: 'simple',
            memberName: 'dog',
            description:  'Want see a dog?',
        });
    }

    async run(message, args)
    {

        let {body} = await superagent
        .get('https://dog.ceo/api/breeds/image/random')
        console.log(body.message)  
        {
            let dEmbed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor('Sky Bot!', message.guild.iconURL)
            .setImage(body.message)
            .setTimestamp()
            .setFooter('Sky Bot!', this.client.user.displayAvatarURL)

            message.channel.send(dEmbed)
        }
    
    
    }
}
module.exports = DogCommand;