const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '5584542810:AAH85gxAb_kJeU7zIoGNYE4k1hlJJzA9TFE';
// const debug = require('./helpers');

let timeOut = 10;
const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeOut: timeOut
        }
    }
});

console.log('Bot has been started!');

/*
bot.on('callback_query', query => {

    const { chat, message_id, text } = query.message;

    switch (query.data) {
        case 'forward':
            // кудаб откуда, что
            bot.forwardMessage(chat.id, chat.id, message_id);
            break;
        case 'reply':
            bot.sendMessage(chat.id, 'Отвечаем на сообщение', {
                reply_to_message_id: message_id
            });
            break;
        case 'edit':
            bot.editMessageText(`${text} (edited)`, {
                chat_id: chat.id,
                message_id: message_id,
                reply_markup: { inline_keyboard }
            });
            break;
        case 'delete':
            dot.deleteMessage(chat.id, message_id);
            break;
    }

    bot.answerCallbackQuery({
        callback_query_id: query.id
    });
});

bot.onText(/\/start/, (msg, {source, match}) => {
    const { id } = msg.chat.id;

    bot.sendMessage(id, 'Keyboard', {
        reply_markup: {
            inline_keyboard
        }
    })
});*/

/*
обработка сообщений от пользователей
bot.on('message', (msg) => {
     const { id, first_name } = msg?.chat;

     bot.sendMessage(id, 'Привет, ' + first_name);
     bot.sendMessage(id, debug(msg));

     console.log(msg);
});*/

// обработка команд бота идет на onText
bot.onText(/\/start/, msg => {
    const { id } = msg.chat;
    bot.sendMessage(id, 'уже все началось');
})

bot.onText(/\/help (.+)/, msg => {
    const { id } = msg.chat;
    bot.sendMessage(id, 'ничего нет');
})

// inline keybord
bot.on('message', msg => {
    const { id, first_name } = msg.chat;

    bot.sendMessage(id,
        'Нажми, чтобы записаться в Автогарантсити на услугу',
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Автогарантсити',
                            web_app: {
                                text: 'Автогарантсити',
                                url: 'https://ortus.ru/w/13'
                            }
                        }
                    ]
                ]
            }
        });
})

/*bot.on('callback_query', query => {
    // bot.sendMessage(query.message.chat.id, debug(query));
    bot.answerCallbackQuery(query.id, `${query.data}`)
})*/

/*bot.on('message', msg => {
    const { id } = msg.chat;
    bot.sendMessage(id, 'Keyboard', {
        reply_markup: {
            keyboard: [
                [
                    'App', '2'
                ]
            ]
        }
    })
})*/
