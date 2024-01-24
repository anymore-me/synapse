import { Command } from '../../lib/modules/Command';
import { ApplicationCommandOptionType } from 'discord.js';

export default new Command({
  name: 'eval',
  isOwnerCommand: true,
  description: 'Evalコマンド',
  ephemeral: true,
  options: [
    {
      name: 'content',
      description: 'Discord.js',
      type: ApplicationCommandOptionType.String,
      required: true,
    }
  ],
  execute: {
    interaction: async ({ client, interaction }) => {
      const content = interaction.options.getString("content") || ""

      await interaction.followUp("実行しました")

      await new Promise((resolve, reject) => resolve(eval(content)));
    },
    message: async ({ client, message, args}) => {
      const content = args ? args.join(" ") : "message.reply('コードが入力されていません')"

      await new Promise((resolve, reject) => resolve(eval(content)));
    }
  }
})