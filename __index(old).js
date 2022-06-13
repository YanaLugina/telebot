//const TelegramBot = require('node-telegram-bot-api');
//const debug = require('./helpers');
// replace the value below with the Telegram token you receive from @BotFather
//const token = '766582943:AAF4vc-AtrgxtSyKZsU7XDWg7F47Sw6_LCo';

//console.log('Bot has been started!');

// Create a bot that uses 'polling' to fetch new updates
/*const bot = new TelegramBot(token, {
    polling: true
});*/

/*
"start": "node index.js"
*/
/*const bot = new TelegramBot(token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

const message_users = [];*/

// bot.on('message', (msg) => {
    //const chatId = msg.chat.id;
    // const { id } = msg.chat;



    // send a message to the chat acknowledging receipt of their message
    // message_users.push(msg.text);
    //
    // console.log(msg);
    //console.log(message_users);




/*    bot.sendMessage(id, 'i-keyboard', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Google',
                        url: 'https://google.com'
                    }
                ],
                [
                    {
                        text: 'Reply',
                        callback_data: 'Reply'
                    },
                    {
                        text: 'Forward',
                        callback_data: 'Forward'
                    }
                ]
            ]
        }
    });*/

    /*    const html = `
            Hello <strong>${msg.from.first_name}</strong>
            <i>Test massage</i>
            <pre>${debug(msg)}
    </p>`;


        if(msg.text.toLocaleLowerCase() === 'hello') {
            bot.sendMessage(id, `Hello, ${msg.from.first_name}! Today ${Date()}`);
        } else {
            bot.sendMessage(id, html, {
                parse_mode: 'HTML'
            })
                .then( () => {
                    console.log('Message has been send');
                })
                .catch( (error) => {
                    console.error(error);
                });
        }

    bot.sendMessage(id, html, {
        parse_mode: 'HTML'
    });*/


    //MarkDown
/*
    markdown = `
    *Hello, ${msg.from.first_name}*
    _Italick text_.
    `;

    bot.sendMessage(id, markdown, {
        parse_mode: 'Markdown'
    })
*/

/*    setTimeout( () => {
        bot.sendMessage(id, `https://tlgrm.ru/docs/bots/api#changelog`, {
            disable_web_page_preview: true,  //отключение богатых ссылок
            disable_notification: true       //отключение уведомления пользователя о пришедшем сообщении
        });
    }, 4000);*/

    /*if(msg.text === 'Ответить') {
        bot.sendMessage(id, 'Response', {
            reply_markup: {
                force_reply: true,
            }
        })
    } else if (msg.text === 'Закрыть') {
        bot.sendMessage(id, 'Close. You a sure?', {
            reply_markup: {
                remove_keyboard: true,
            }
        })
    } else {
        bot.sendMessage(id, 'Клавиатура', {
            reply_markup: {
                keyboard: [
                    ['Ответить', 'Закрыть'],
                    [{
                        text: 'Отправить местоположение',
                        request_location: true,
                    }],
                    [{
                        text: 'Отправить контакт',
                        request_contact: true,
                    }]
                ],
                one_time_keyboard: true,
            }
        })
    }*/




//});

/*bot.onText(/\/start/, msg => {
    const { id } = msg.chat;

    bot.sendMessage(id, debug(msg));
});

bot.onText(/\/help (.+)/, (msg, [source, match]) => {
    const { id } = msg.chat;

    bot.sendMessage(id, debug(match));
});*/

/*
bot.onText(/\/geo (.+)/, (msg, [source, match]) => {
    const { id } = msg.chat;

});*/

/*
bot.on('callback_query', query => {
   //bot.sendMessage(query.message.chat.id, debug(query))
    bot.answerCallbackQuery(query.id, `${query.data}`);
});*/

/*bot.on('inline_query', query => {
    const results = [];

    for (let i = 0; i < 5; i++) {
        results.push({
            type: 'article',
            id: i.toString(),
            title: 'Title ' + i,
            input_message_content: {
                message_text: `Article #${i + 1}`
            }
        })
    }

    bot.answerInlineQuery(query.id, results, {
        cache_time: 0
    })
});*/
