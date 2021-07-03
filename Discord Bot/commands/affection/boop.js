module.exports = {
    name: "boop",
    permissions: ["SEND_MESSAGES"],
    cooldown: 2 , 
    description: "send yourself or another user a boop",
    usage: `=boop (@user)`,
    permissions: ["SEND_MESSAGES"],
    aliases: [],

    execute(client, message, args, Discord) {
        boopLinks = [ 'https://media.tenor.com/images/9945480efe5179c227558769613ee275/tenor.gif',
        'https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif?itemid=6287077',
        'http://i.imgur.com/fZmUTgw.gif',
        'https://66.media.tumblr.com/9a457a43bcae3ebaafda53d7fe6f572d/tumblr_pqjm6cCRt41th206io1_1280.gif',
        'https://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-9.gif',
        'https://media1.tenor.com/images/0da232de2ee45e1464bf1d5916869a39/tenor.gif?itemid=16935454' ]
        
        const randomNum = Math.floor(Math.random() * Math.floor(boopLinks.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} booped ${member.displayName} !`)
                .setTimestamp()
                .setImage(boopLinks[randomNum])
            message.channel.send(firstEmbed);
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(boopLinks[randomNum])
            message.channel.send(firstEmbed);

        }
        
    }
}
