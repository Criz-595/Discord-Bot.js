const { Client, Message , MessageEmbed } = require('discord.js');

module.exports = {
    name: 'bot-guilds',
    permissions: ["SEND_MESSAGES"],
    description: "Embeds!",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
     execute (client, message, args, Discord) {
         const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(10);

         const description = guilds.map((guild, index) => {
             return `${index+1}) ${guild.name} -> ${guild.memberCount} members`
         }).join(`\n`)

         message.channel.send(
             new MessageEmbed()
                 .setTitle('Top Guilds')
                 .setDescription(description)
             )
     }
}