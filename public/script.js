
const result = [];
const container = document.querySelector(".container")
let state = 'start';
let historyState = ['start'];
let sample;

let go = document.querySelector("#go")
go.addEventListener("click", function (e) {
    change();
});

let back = document.querySelector("#back")
back.addEventListener("click", function (e) {
    backState();
});

function backState() {
    if (state == 'finish') {
        go.innerHTML = 'Далее';
    }
    if (historyState.length > 1) {
        removeElements();
        historyState.pop();
        result.pop();
        state = historyState[historyState.length - 1];
        createElements();
        console.log('state = ', state);
        console.log('result = ', result);
        console.log('historyState = ', historyState);
    }
}

function logic() {
    switch (state) {
        case 'start':
            state = 'scriptConstructor';
            break;

        case 'scriptConstructor':
            state = 'welcom';
            break;

        case 'welcom':
            state = 'missionCall';
            break;

        case 'missionCall':
            if (result[2][1] == 'Выявление потребностей (перед звонком с презентацией продукта)') {
                state = 'definitionNeed';
            } else if (result[2][1] == 'Подбор и продажа продукта (здесь и сейчас)') {
                state = 'selectionSaleProdukt';
            } else if (result[2][1] == 'Назначение встречи (знакомство или презентация продукта)') {
                state = 'useMiting';
            } else if (result[2][1] == 'Отправка коммерческого предложения (здесь и сейчас)') {
                state = 'sendingCommercialOffer';
            }
            break;

        case 'useMiting':
            if (result[3][0] == 'Знакомство') {
                state = 'useMitingPickUp';
            } else if (result[3][0] == 'Презентация продукта') {
                state = 'useMitingProductPresentation';
            }
            break;

        case 'useMitingProductPresentation':
            if (result[4][0] == 'Offline') {
                state = 'useMitingProductPresentationOffline';
            } else if (result[4][0] == 'Online') {
                state = 'useMitingProductPresentationOnline'
            } else if (result[4][0] == 'Формат встречи не имеет значения') {
                state = 'useMitingProductPresentationNoMatterWhere'
            }
            break;

        case 'useMitingProductPresentationOffline':
            if (result[5][0] == 'Наш офис') {
                state = 'useMitingProductPresentationOfflineOurOffice';
            } else if (result[5][0] == 'Офис клиента') {
                state = 'useMitingProductPresentationOfflineClientOffice'
            } else if (result[5][0] == 'Не важно где пройдет встреча') {
                state = 'useMitingProductPresentationNoMatterWhere'
            }
            break;

        case 'useMitingPickUp':
            if (result[4][0] == 'Offline') {
                state = 'useMitingPickUpOffline';
            } else if (result[4][0] == 'Online') {
                state = 'useMitingPickUpOnline';
            } else if (result[4][0] == 'Формат встречи не имеет значения') {
                state = 'useMitingPickUpNoMatterWhere';
            }
            break;

        // case 'useMitingPickUpNoMatterWhere':
        //     state = 'useMitingPickUpOfflineNoMatterWhere';
        //     break;

        case 'useMitingPickUpOffline':
            if (result[5][0] == 'Наш офис') {
                state = 'useMitingPickUpOfflineOurOffice';
            } else if (result[5][0] == 'Офис клиента') {
                state = 'useMitingPickUpOfflineСlientOffice';
            } else if (result[5][0] == 'Не важно где пройдет встреча') {
                state = 'useMitingPickUpOfflineNoMatterWhere';
            }
            break;
        case 'finish':
            state = 'sendScript'
            break;

        default:
            state = 'finish';
    }



}

function change() {
    let elements = container.querySelectorAll("div")


    pushData(elements);

    removeElements(container);
    logic()
    createElements();
    // console.log('state = ', state);
    // console.log('result = ', result);
    // console.log('historyState = ', historyState);
}

function historyRecord(stateNow) {
    if (stateNow !== historyState[historyState.length - 1])
        historyState.push(stateNow);
}

function pushData(elements) {
    let newArr = []
    for (let i = 0; i < elements.length; i++) {
        let inputs = elements[i].querySelectorAll('input');
        if (inputs.length > 1) {
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].checked) {
                    newArr.push(inputs[i].value)
                }
            }
        } else {
            newArr.push(inputs[0].value);
        }
    }
    if (newArr.length > 0) {
        result.push(newArr);
    }
    // if (newArr.includes('')) {
    //     backState();
    // }
}

function createElements() {

    switch (state) {
        case 'start':
            historyRecord('start');
            start();
            break;
        case 'scriptConstructor':
            historyRecord('scriptConstructor');
            scriptConstructor();
            break;
        case 'welcom':
            historyRecord('welcom');
            welcom();
            break;
        case 'missionCall':
            historyRecord('missionCall');
            missionCall();
            break;
        case 'definitionNeed':
            historyRecord('definitionNeed');
            definitionNeed();
            break;
        case 'selectionSaleProdukt':
            historyRecord('selectionSaleProdukt');
            selectionSaleProdukt();
            break;
        case 'useMiting':
            historyRecord('useMiting');
            useMiting();
            break;
        case 'useMitingPickUp':
            historyRecord('useMitingPickUp');
            useMitingPickUp();
            break;
        case 'useMitingPickUpOffline':
            historyRecord('useMitingPickUpOffline');
            useMitingPickUpOffline();
            break;
        case 'useMitingPickUpOfflineOurOffice':
            historyRecord('useMitingPickUpOfflineOurOffice');
            useMitingPickUpOfflineOurOffice();
            break;
        case 'useMitingPickUpOfflineСlientOffice':
            historyRecord('useMitingPickUpOfflineСlientOffice');
            useMitingPickUpOfflineСlientOffice();
            break;
        case 'useMitingPickUpOfflineNoMatterWhere':
            historyRecord('useMitingPickUpOfflineNoMatterWhere');
            useMitingPickUpOfflineNoMatterWhere();
            break;
        case 'useMitingPickUpOnline':
            historyRecord('useMitingPickUpOnline');
            useMitingPickUpOnline();
            break;
        case 'useMitingPickUpNoMatterWhere':
            historyRecord('useMitingPickUpNoMatterWhere');
            useMitingPickUpNoMatterWhere();
            break;
        case 'useMitingProductPresentation':
            historyRecord('useMitingProductPresentation');
            useMitingProductPresentation();
            break;
        case 'useMitingProductPresentationOffline':
            historyRecord('useMitingProductPresentationOffline');
            useMitingProductPresentationOffline();
            break;
        case 'useMitingProductPresentationOfflineOurOffice':
            historyRecord('useMitingProductPresentationOfflineOurOffice');
            useMitingProductPresentationOfflineOurOffice();
            break;
        case 'useMitingProductPresentationOfflineClientOffice':
            historyRecord('useMitingProductPresentationOfflineClientOffice');
            useMitingProductPresentationOfflineClientOffice();
            break;
        case 'useMitingProductPresentationOfflineNoMatterWhere':
            historyRecord('useMitingProductPresentationOfflineNoMatterWhere');
            useMitingProductPresentationOfflineNoMatterWhere();
            break;
        case 'useMitingProductPresentationOnline':
            historyRecord('useMitingProductPresentationOnline');
            useMitingProductPresentationOnline();
            break;
        case 'useMitingProductPresentationNoMatterWhere':
            historyRecord('useMitingProductPresentationNoMatterWhere');
            useMitingProductPresentationNoMatterWhere();
            break;
        case 'sendingCommercialOffer':
            historyRecord('sendingCommercialOffer');
            sendingCommercialOffer();
            break;
        case 'finish':
            historyRecord('finish');
            finish();
            break;
        case 'sendScript':
            sendScript();
            bye();
    }
}

function sendScript() {
    let dataScript = JSON.stringify({sample, result});
    console.log(dataScript);
    let request = new XMLHttpRequest();
    request.open("POST", "/scriptData", false);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(dataScript);
    request.addEventListener("load", function () {
        // получаем и парсим ответ сервера
        let receivedUser = JSON.parse(request.response);
        console.log(receivedUser);   // смотрим ответ сервера
    });
}

function start() {
    createHeader('Конструктор скрипта');
    createP('Привет! Ты заполняешь все разделы, мы присылаем готовый скрипт! Все просто, вперед!');
}

function scriptConstructor() {
    createDivPInput('Электронная почта')
    // progress++;
}

function welcom() {
    createHeader("Приветствие")
    createDivPInput("Напишите должность сотрудника, который звонит");
    createDivPSpanInput("Напишите форму вашей организации", 'Например: "компания", "юридическая фирма", "автосервис", "салон красоты"');
    createDivPInput("Напишите название вашей организации");
    // progress++
}

function missionCall() {
    createHeader("Цель звонка")
    createDivPSpanInput("Напишите коротко о деятельности вашей организации и о тех реальных преимуществах, которые вы имеете в сравнении с конкурентами", 'Например: Мы занимаемся предоставлением пропусков для грузовых автомобилей в Москву. Взаимодействуя напрямую с департаментом транспорта имеем очень быстрое оформление и высокую степень одобрения - 99%')
    createDivPRadio('Напишите цель данного звонка', ['Выявление потребностей (перед звонком с презентацией продукта)', 'Подбор и продажа продукта (здесь и сейчас)', 'Назначение встречи (знакомство или презентация продукта)', 'Отправка коммерческого предложения (здесь и сейчас)']);
    // progress++
}

function definitionNeed() {
    createHeader("Выявление потребностей (перед звонком с презенацией продукта)")
    createDivPSpanInput("Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать", "Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?")
    createDivPSpanInput("Напишите в течение какого количества дней ваше предложение будет готово для клиента", "Например: 1 день")
    createDivPSpanInput("Напишите сколько времени вам с клиентом понадобится на обсуждение предложения на следующем звонке", "Например: 15 минут")
    sample = 'definitionNeed'
}

function selectionSaleProdukt() {
    createHeader("Подбор и продажа продукта (здесь и сейчас)");
    createDivPSpanInput("Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать", "Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?")
    createDivPSpanInput("Напишите последовательно все этапы оформления продукта после положительного решения клиента", 'Например: Сейчас я отправлю вам ссылку в Телеграм. Вам необходимо будет пройти по ней и нажать "Купить". После чего, ввести свои данные и данные вашей карты. Далее нажать кнопку "Оплатить"')
    sample = 'selectionSaleProduct'
}

function useMiting() {
    createHeader("Назначение встречи");
    createDivPRadio('Напишите цель встречи', ['Знакомство', 'Презентация продукта']);
    // progress++
}

function useMitingPickUp() {
    createHeader("Назначение встречи. Знакомство");
    createDivPRadio('Напишите формат встречи, который предполагается в вашей компании', ['Offline', 'Online', 'Формат встречи не имеет значения']);
}

function useMitingProductPresentation() {
    createHeader("Назначение встречи. Презентация");
    createDivPRadio('Напишите формат встречи, который предполагается в вашей компании', ['Offline', 'Online', 'Формат встречи не имеет значения']);
}

function useMitingPickUpOffline() {
    createHeader("Назначение встречи. Знакомство. Offline");
    createDivPRadio('Напишите, какой вариант встречи возможен', ['Наш офис', 'Офис клиента', 'Не важно где пройдет встреча']);
    // progress++
}

function useMitingPickUpOfflineOurOffice() {
    createHeader("Назначение встречи. Знакомство. Offline. Наш офис");
    createDivPSpanInput("Напишите адрес вашего офиса ", "Например: Невский проспект, дом 35, БЦ Атриум");
    createDivPSpanInput("Напишите, сколько времени потребуется на встречу", "Например: 1 час");
    sample = 'useMitingPickUpOfflineOurOffice';
}

function useMitingPickUpOfflineСlientOffice() {
    createHeader("Назначение встречи. Знакомство. Offline. Офис клиента");
    createDivPSpanInput("Напишите, сколько времени потребуется на встречу", "Например: 1 час");
    sample = 'useMitingPickUpOfflineСlientOffice';
}

function useMitingPickUpOfflineNoMatterWhere() {
    createHeader("Назначение встречи. Знакомство. Offline. Не важно где пройдет встреча");
    createDivPSpanInput("Напишите, сколько времени потребуется на встречу", "Например: 1 час");
    sample = 'useMitingPickUpOfflineNoMatterWhere';
}

function useMitingPickUpOnline() {
    createHeader('Назначение встречи. Знакомство. Online')
    createDivPSpanInput('Напишите какое приложение вы будете использовать для связи с клиентом', 'Например: Zoom, Google Meet, Skype')
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час')
    sample = 'useMitingPickUpOnline'
}

function useMitingPickUpNoMatterWhere() {
    createHeader('Назначение встречи. Знакомство. Формат встречи не имеет значения')
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час')
    sample ='useMitingPickUpNoMatterWhere';
}

function useMitingProductPresentation() {
    createHeader("Назначение встречи. Презентация продукта");
    createDivPRadio('Напишите формат встречи, который предполагается в вашей компании', ['Offline', 'Online', 'Формат встречи не имеет значения']);
    // progress += 4;
}

function useMitingProductPresentationOffline() {
    createHeader('Назначение встречи. Презентация продукта. Offline');
    createDivPRadio('Напишите, какой вариант встречи возможен', ['Наш офис', 'Офис клиента', 'Не важно где пройдет встреча'])
    // progress++
}

function useMitingProductPresentationOfflineOurOffice() {
    createHeader('Назначение встречи. Презентация продукта. Offline. Наш офис');
    createDivPSpanInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?')
    createDivPSpanInput('Напишите адрес вашего офиса', 'Например: Невский проспект, дом 35, БЦ Атриум');
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час');
    sample = 'useMitingProductPresentationOfflineOurOffice';
}

function useMitingProductPresentationOfflineClientOffice() {
    createHeader('Назначение встречи. Презентация продукта. Offline. Офис клиента');
    createDivPSpanInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?');
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час')
    sample = 'useMitingProductPresentationOfflineClientOffice'
}

function useMitingProductPresentationOfflineNoMatterWhere() {
    createHeader('Назначение встречи. Презентация продукта. Offline. Не важно где пройдет встреча');
    createDivPSpanInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?')
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час')
    sample = 'useMitingProductPresentationOfflineNoMatterWhere'
}

function useMitingProductPresentationOnline() {
    createHeader('Назначение встречи. Презентация продукта. Online');
    createDivPSpanInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?');
    createDivPSpanInput('Напишите какое приложение вы будете использовать для связи с клиентом', 'Например: Zoom, Google Meet, Skype');
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час');
    sample = 'useMitingProductPresentationOnline';
}

function useMitingProductPresentationNoMatterWhere() {
    createHeader('Назначение встречи. Презентация продукта. Формат встречи не имеет значения');
    createDivPSpanInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?')
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час')
    sample = 'useMitingProductPresentationNoMatterWhere';
}

function sendingCommercialOffer() {
    createHeader('Отправка коммерческого предложения')
    createDivPSpanInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?')
    sample = 'sendingCommercialOffer'
}

function finish() {
    createHeader('Завершение')
    createDivPSpanInput('На этом закончим. Напишите, как вы вообще?', 'Например: Отлично, продуктивно, интересно');
    go.innerHTML = 'Завершить';
}

function bye() {
    createHeader('Спасибо, ваш Скрипт собран');
    createP('Результат придёт на почту');
    let btn = document.querySelector('#btn');
    while (btn.firstChild) {
        btn.removeChild(btn.firstChild);
    }

}

function removeElements() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

}

function createHeader(contentH1) {
    let h1 = document.createElement("h1");
    let texth1 = document.createTextNode(contentH1);
    h1.appendChild(texth1);
    container.appendChild(h1);
}

function createP(contentP) {
    let p = document.createElement("p");
    let textP = document.createTextNode(contentP);
    p.appendChild(textP);
    container.appendChild(p);
}

function createDivPSpanInput(contentP, contentSpan) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let elemText = document.createTextNode(contentP);
    let elemText1 = document.createTextNode(contentSpan);
    p.appendChild(elemText);
    span.appendChild(elemText1)
    div.appendChild(p);
    div.appendChild(span);
    div.appendChild(input);
    container.appendChild(div);
}

function createDivPInput(contentP) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let input = document.createElement("input");
    let elemText = document.createTextNode(contentP);
    p.appendChild(elemText);
    div.appendChild(p);
    div.appendChild(input);
    container.appendChild(div);
}

function createDivPRadio(contentP, contentRadio) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let elemText = document.createTextNode(contentP);
    p.appendChild(elemText);
    div.appendChild(p)

    for (let i = 0; i < contentRadio.length; i++) {
        div.appendChild(createRadio(contentRadio[i]));
    }

    function createRadio(content) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.value = content;
        radio.name = "radio";
        let span = document.createElement("span");
        let textSpan = document.createTextNode(content);
        span.appendChild(textSpan);

        let pRadio = document.createElement("p");
        pRadio.appendChild(radio)
        pRadio.appendChild(span)
        return pRadio;
    }
    div.querySelector('input').checked = 'true';
    container.appendChild(div);

}





