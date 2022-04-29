"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const telegram_1 = require("telegram");
const sessions_1 = require("telegram/sessions");
const app = express();
const apiId = 123456;
const apiHash = '123456abcdfg';
const stringSession = '';
const BOT_TOKEN = '';
const client = new telegram_1.TelegramClient(new sessions_1.StringSession(stringSession), apiId, apiHash, { connectionRetries: 5 });
app.get('/', async (req, res) => {
    await client.start({
        botAuthToken: BOT_TOKEN,
    });
});
app.listen(3000);
//# sourceMappingURL=server.js.map