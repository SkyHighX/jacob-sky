const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description:  'About me',
        });
    }

    async run(message, args)
    {
        var MyInfo = new discord.RichEmbed()
            .setURL("https://discordapp.com/oauth2/authorize?&client_id=554675955327828000&scope=bot&permissions=8")
            .setTitle("Invite my bot!")
            .setAuthor("About Sky Bot!")
            .addField("What is my name?",`My name is Sky Bot!`)
            .addField("My favourite  Color",`My favourite color is red!`)
            .setFooter("Thanks for reading, Made by: SkyHigh_X")
            .setColor('RANDOM')

        message.channel.sendEmbed(MyInfo);
    }
}

module.exports = InfoAboutMeCommand;