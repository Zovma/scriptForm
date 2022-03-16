const express = require("express");
const nodemailer = require('nodemailer')
const path = require('path');
const app = express();
const sendScript = require("./sendScript.js");
const jsonParser = express.json();
const XlsxPopulate = require('xlsx-populate');
const fs = require('fs');

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
  console.log(dataScript.sample);
  switch (dataScript.sample) {
    case 'definitionNeed':
      definitionNeed(dataScript)
      break;
    case 'selectionSaleProduct':
      selectionSaleProduct(dataScript)
      break;
    case 'sendingCommercialOffer':
      sendingCommercialOffer(dataScript)
      break;
    default:
      console.log('default')
      break;
  }
}


function definitionNeed(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
      workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
      workbook.find(/%Название%+/g, match => dataScript.result[1][2])
      workbook.find(/%Действие%+/g, match => dataScript.result[2][0])
      workbook.find(/%Потребность%+/g, match => dataScript.result[3][0])
      workbook.find(/%ВремяГотовности%+/g, match => dataScript.result[3][1])
      workbook.find(/%ВремяРазговора%+/g, match => dataScript.result[3][2])
      return workbook.toFileAsync(`./script/${dataScript.result[1][2]}.xlsx`);
    });
  sendScript(dataScript.result[0][0], dataScript.result[1][2])
    // fs.unlink(`/script/*.xlsx`, function(){})
}

function selectionSaleProduct(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
      workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
      workbook.find(/%Название%+/g, match => dataScript.result[1][2])
      workbook.find(/%Действие%+/g, match => dataScript.result[2][0])
      workbook.find(/%Потребность%+/g, match => dataScript.result[3][0])
      workbook.find(/%ЭтапыОформления%+/g, match => dataScript.result[3][1])
      return workbook.toFileAsync(`./script/${dataScript.result[1][2]}.xlsx`);
    });
  sendScript(dataScript.result[0][0], dataScript.result[1][2])
}

function sendingCommercialOffer(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
      workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
      workbook.find(/%Название%+/g, match => dataScript.result[1][2])
      workbook.find(/%Действие%+/g, match => dataScript.result[2][0])
      workbook.find(/%Потребность%+/g, match => dataScript.result[3][0])
      return workbook.toFileAsync(`./script/${dataScript.result[1][2]}.xlsx`);
    });
  sendScript(dataScript.result[0][0], dataScript.result[1][2])
}







app.listen(3000);