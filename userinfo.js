const commando = require('discord.js-commando');
const discord = require('discord.js');

class UserInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'userinfo',
            group: 'simple',
            memberName: 'userinfo',
            description:  'About my user!',
        });
    }

    async run(message, args)
    {
        var UserInfoCommand = new discord.RichEmbed()
        .addField("Username", `${message.author.username}#${message.author.discriminator}`, true)
        .addField("ID", `${message.author.id}`, true)
        .setColor('RANDOM')
        .setThumbnail(`${message.author.avatarURL}`)
        .setTimestamp()
        .setURL(`${message.author.avatarURL}`)
        .addField('Game', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
        .addField('Roles', `\`${message.member.roles.filter(r => r.name).size}\``, true)

        message.channel.sendEmbed(UserInfoCommand);
      }
     
}

module.exports = UserInfoCommand;