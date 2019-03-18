const commando = require('discord.js-commando')
class KickCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Kick a user!',
            argsType: 'multiple'
        });
    }

    async run(message, args) {
        let kickedUser = message.mentions.members.first();
        if (!kickedUser) {
            message.channel.send("Sorry I can not find the user!")
            return;
        }
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(":x:You DON'T have role for kicks other users! :x:");
            return;
        }
        const reason =args.slice(1).join(' ');
        message.guild.member(kickedUser).kick(reason);
        return message.reply(`***The User is kicked!***`)


}
}


module.exports = KickCommand; 