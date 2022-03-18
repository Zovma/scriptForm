const nodemailer = require('nodemailer')
const fs = require('fs');


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
    text: 'Скрипт готов!',
    // html:
    //   "<p>",
    attachments: [{
      filename: `${nameScript}.xlsx`,
      path: `./readySimple/${nameScript}.xlsx`
    }
    ],
  })
}

module.exports = sendScript;


