const Commando = require('discord.js-commando')
const bot = new Commando.Client({
    owner: '474612363639783474',
    commandPrefix: '!!'
});
const TOKEN = 'NTU0Njc1OTU1MzI3ODI4MDAw.D3FfKQ.ZPQLqRQ10WcToFxx-R8oQmho_kM';

bot.registry
    .registerGroups([
        ['simple', 'Simple'],
        ['admin', 'Admin'],
    ])
    .registerDefaults()
    .registerCommandsIn(__dirname + '/commands');

    bot.on('ready', () => {
        console.log('ready,hi')
        bot.user.setGame(`!!help || Sky Bot || Made by: SkyHigh_X`)
    })
    

bot.on('message', (message) => {
    if (message.content === 'Hello')
        message.channel.send(`${message.author} Hello, how are you today ? c :`)

});



bot.login(TOKEN);