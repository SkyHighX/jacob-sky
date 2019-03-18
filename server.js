const commando = require('discord.js-commando');
const discord = require('discord.js');

class ServerInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'serverinfo',
            group: 'simple',
            memberName: 'serverinfo',
            description:  'About server',
        });
    }

    async run(message, args)
    {
        var ServerInfo = new discord.RichEmbed()
        .setTitle('Server info!')
        .setColor('RANDOM')
        .addField("Server Name", `${message.guild.name}`, true)
        .addField("Server ID", `${message.guild.id}`, true)
        .addField('Member count: ', message.guild.memberCount)
        .addField('The owner of this discord is ', message.guild.owner)
        .addField('Roles', `${message.guild.roles.filter(r => r.name).size}`, true)


        message.channel.sendEmbed(ServerInfo);
      }
     
}

module.exports = ServerInfoCommand;