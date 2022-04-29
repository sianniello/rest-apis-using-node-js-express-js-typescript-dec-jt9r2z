import * as express from 'express';
import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const app = express();

const apiId = 123456;
const apiHash = '123456abcdfg';
const stringSession = ''; // leave this empty for now
const BOT_TOKEN = ''; // put your bot token here

const client = new TelegramClient(
  new StringSession(stringSession),
  apiId,
  apiHash,
  { connectionRetries: 5 }
);

app.get('/', async (req, res) => {
  await client.start({
    botAuthToken: BOT_TOKEN,
  });
});

app.listen(3000);
