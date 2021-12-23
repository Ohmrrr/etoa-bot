const { MessageEmbed } = require('discord.js');
const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: 'avatar',
    description: 'Sends the profile picture of the user in PNG format.',
    usage: 'e!avatar <user>',
    userPermission: 'SEND_MESSAGES',

    async execute(message, args, client) {

    },
});