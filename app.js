const express = require("express");
const nodemailer = require('nodemailer')
const path = require('path');
const app = express();
const fs = require("fs");
const jsonParser = express.json();
const XlsxPopulate = require('xlsx-populate');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/script", function (request, response) {

  response.sendFile(__dirname + "/index.html");
});

app.post("/scriptData", jsonParser, function (request, response) {
  console.log('Пришёл post');
  if (!request.body) return response.sendStatus(400);
  response.json(request.body); // отправляем пришедший ответ обратно
  let dataScript = request.body;
  console.log(dataScript.result);
  createSample(dataScript);

});



function createSample(dataScript) {
  XlsxPopulate.fromBlankAsync()
  XlsxPopulate.fromFileAsync(dataScript.sample)
    .then(workbook => {
      workbook.find(/%Должность%+/g, match => dataScript.result[1][0])
      workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
      workbook.find(/%Название%+/g, match => dataScript.result[1][2])
      workbook.find(/%Потребность%+/g, match => dataScript.result[3][0])
      workbook.find(/%ВремяГотовности%+/g, match => dataScript.result[3][1])
      workbook.find(/%ВремяРазговора%+/g, match => dataScript.result[3][2])

      return workbook.toFileAsync("./out.xlsx");
    });
}

app.listen(3000);