const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
  name: 'echo',
  aliases: ['say'],
  description: 'Repeats what you say.',
  usage: 'e!echo [message]',
  userPermission: ['SEND_MESSAGES'],
  botPermission: ['SEND_MESSAGES'],

  async execute(message, args, client) {
    const repeatMessage = new MessageEmbed();

    if (!args[1]) {
      repeatMessage
        .setColor('RED')
        .setDescription('🔴 Enter a message for me to repeat.');

      return message.channel.send({ embeds: [repeatMessage] });
    }

    const input = args.slice(1).join(' ');

    repeatMessage.setColor('GREEN').setDescription(input);

    message.channel.send({ embeds: [repeatMessage] });
  },
});
