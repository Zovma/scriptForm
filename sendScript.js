const nodemailer = require('nodemailer')

// let testEmailAccount = await nodemailer.createTestAccount()


function sendScript(mail, nameScript) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'eexa44ple@yandex.ru',
      pass: '6626553000',
    },
  })

  transporter.sendMail({
    from: 'Скрипт продаж <eexa44ple@yandex.ru>',
    to: mail,
    subject: 'Готовый скрипт продаж',
    /*text: 'This message was sent from Node js server.',
    html:
      "It's worked! It's Cool!!!",*/
    attachments: [{
      filename: `${nameScript}.xlsx`,
      path: `./readySimple/${nameScript}.xlsx`
    }
    ],
  })
}

module.exports = sendScript;


