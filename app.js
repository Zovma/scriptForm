const express = require("express");
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



  // fs.writeFileSync("./scriptData/scriptData.json", JSON.stringify(request.body));
});


function createSample(dataScript) {
  // Load a new blank workbook
  XlsxPopulate.fromFileAsync(dataScript.sample)
    .then(workbook => {
      // Modify the workbook.
      for (let i = 1; i < dataScript.result.length; i++ ) {
        for (let j = 0; j < dataScript.result[i]; j++) {
          workbook.find(/%variable%+/g, match => dataScript.result[i][j])
          console.log('work');
        }
      }

      // Write to file.
      return workbook.toFileAsync("Шаблон2.xlsx");
    });
}








app.listen(3000);