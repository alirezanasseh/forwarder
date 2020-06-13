const Telegraf = require('telegraf');
const BotHash = "1263548385:AAHHLisXaRLendfgotM2VovtWlCOmHo-FPg";
const bot = new Telegraf(BotHash);

bot.start(ctx => {
    console.log("OK");
    ctx.reply('Salam!');
    let source_chat = bot.telegram.getChat('freesignalsforex2020');
    console.log(source_chat);
});

bot.launch();
