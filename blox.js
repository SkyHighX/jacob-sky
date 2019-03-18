const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'blox',
            group: 'simple',
            memberName: 'blox',
            description:  'About blox!',
        });
    }

    async run(message, args)
    {
        var MyInfo = new discord.RichEmbed()
             .setDescription("Hello! Blox is Resorts. (Group **ROBLOX**)!  𝐖𝐞'𝐫𝐞 𝐡𝐢𝐫𝐢𝐧𝐠! Sky is owner of Blox Resorts!")
             .setColor('RANDOM')
             .setFooter("Thanks for reading!")

        message.channel.sendEmbed(MyInfo);
    }
}

module.exports = InfoAboutMeCommand;