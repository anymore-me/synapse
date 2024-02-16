import { Event } from '../../lib/modules/Event';
import { Colors } from 'discord.js';
import { footer } from '../../lib/utils/Embed';

export default new Event('messageCreate', async (message) => {
  if (message.author.id === '903541413298450462') {
    if (message.embeds[0]?.description?.match(/UPに成功しました/)) {
      await message.channel.send({
        embeds: [
          {
            title: 'Upしてくれてありがとね！',
            description: '1時間後にお知らせするね！',
            color: Colors.Blue,
            footer: footer(),
          },
        ],
      });

      setTimeout(
        async () => {
          await message.channel.send({
            content: '<@&1176816017905811526>',
            embeds: [
              {
                title: 'Upの時間です！',
                description: '</up:935190259111706754> で表示順位を上げよう！',
                color: Colors.Blue,
                footer: footer(),
              },
            ],
          });
        },
        60 * 60 * 1000
      );
    }
  }
});