exports.run = function(client, message, args) {
  let messagecount = parseInt(args.join(' ')) + 1;
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  message.reply(":white_check_mark: Belirlenen miktarda mesaj sildim...").then(message => { setTimeout(function(){ message.delete(0); }, 7000); })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesaj siler.',
  usage: 'temizle <miktar>'
};
