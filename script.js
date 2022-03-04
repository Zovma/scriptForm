const result = [];
const container = document.querySelector(".container")
let progress = 0;

let go = document.querySelector("#go")
go.addEventListener("click", function (e) {
    change();
});

let back = document.querySelector("#back")
back.addEventListener("click", function (e) {
    if (progress > 1) {
        progress -= 2;
        result.pop()
        removeElements(container);
        createElements(container);
        console.log(result);
    }
});

function change() {
    let elements = container.querySelectorAll("div")
    // console.log(elements);
    pushData(elements);
    removeElements(container);

    if (progress == 3) {
        console.log('result из Progress', result);
        console.log('progress == 3');
        if (result[2][1] === 'Подбор и продажа продукта (здесь и сейчас)') {
            console.log('Подбор и продажа продукта');
            progress++;
        } else if (result[2][1] === 'Назначение встречи (знакомство или презентация продукта)') {
            progress += 2;
            console.log('Назначение встречи');
        } else if (result[2][1] === 'Отправка коммерческого предложения (здесь и сейчас)') {
            progress += 17;
            console.log('Отправка коммерческого предложения (здесь и сейчас)');
        }
    }

    // if (progress == 7){
    //     if (result[3][0] === 'Презентация продукта') {

    //     }
    // }

    if (progress == 7) {
        console.log('Проверка состоялась');
        if (result[4][0] == 'Online'){
            progress+=11;
        }
    }




    createElements(container);
    console.log(result);
    console.log(progress);
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
            console.log(inputs[1].checked);
        } else {
            newArr.push(inputs.value);
        }
    }
    if (newArr.length > 0) {
        result.push(newArr);
    }
}

function createElements() {

    switch (progress) {
        case 0:
            scriptConstructor();
            break;
        case 1:
            welcom();
            break;
        case 2:
            missionCall();
            break;
        case 3:
            definitionNeed();
            break;
        case 4:
            selectionSaleProdukt();
            break;
        case 5:
            useMiting();
            break;
        case 6:
            useMitingPickUp();
            break;
        case 7:
            useMitingPickUpOffline();
            break;
        case 8:
            useMitingPickUpOfflineOurOffice();
            break;
        case 9:
            useMitingPickUpOfflineСlientOffice();
            break;
        case 10:
            useMitingPickUpOfflineNoMatterWhere();
            break;
        case 11:
            useMitingPickUpOnline();
            break;
        case 12:
            useMitingPickUpNoMatterWhere();
            break;
        case 13:
            useMitingProductPresentation();
            break;
        case 14:
            useMitingProductPresentationOffline();
            break;
        case 15:
            useMitingProductPresentationOfflineOurOffice();
            break;
        case 16:
            useMitingProductPresentationOfflineClientOffice();
            break;
        case 17:
            useMitingProductPresentationOfflineNoMatterWhere();
            break;
        case 18:
            useMitingProductPresentationOnline();
            break;
        case 19:
            useMitingProductPresentationNoMatterWhere();
            break;
        case 20:
            sendingCommercialOffer();
            break;
        case 21:
            finish();
            break;
    }
}


function scriptConstructor() {
    createDivPInput('Электронная почта')
    progress++;
}

function welcom() {
    createHeader("Приветствие")
    createDivPInput("Напишите должность сотрудника, который звонит");
    createDivPSpanInput("Напишите форму вашей организации", 'Например: "компания", "юридическая фирма", "автосервис", "салон красоты"');
    createDivPInput("Напишите название вашей организации");
    progress++
}

function missionCall() {
    createHeader("Цель звонка")
    createDivPSpanInput("Напишите коротко о деятельности вашей организации и о тех реальных преимуществах, которые вы имеете в сравнении с конкурентами", 'Например: Мы занимаемся предоставлением пропусков для грузовых автомобилей в Москву. Взаимодействуя напрямую с департаментом транспорта имеем очень быстрое оформление и высокую степень одобрения - 99%')
    createDivPRadio('Напишите цель данного звонка', ['Выявление потребностей (перед звонком с презентацией продукта)', 'Подбор и продажа продукта (здесь и сейчас)', 'Назначение встречи (знакомство или презентация продукта)', 'Отправка коммерческого предложения (здесь и сейчас)']);
    progress++
}

function definitionNeed() {
    createHeader("Выявление потребностей (перед звонком с презенацией продукта)")
    createDivPSpanInput("Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать", "Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?")
    createDivPSpanInput("Напишите в течение какого количества дней ваше предложение будет готово для клиента", "Например: 1 день")
    createDivPSpanInput("Напишите сколько времени вам с клиентом понадобится на обсуждение предложения на следующем звонке", "Например: 15 минут")
    progress+=18;
}

function selectionSaleProdukt() {
    createHeader("Подбор и продажа продукта (здесь и сейчас)");
    createDivPSpanInput("Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать", "Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?")
    createDivPSpanInput("Напишите последовательно все этапы оформления продукта после положительного решения клиента", 'Например: Сейчас я отправлю вам ссылку в Телеграм. Вам необходимо будет пройти по ней и нажать "Купить". После чего, ввести свои данные и данные вашей карты. Далее нажать кнопку "Оплатить"')
    progress+=17;
}

function useMiting() {
    createHeader("Назначение встречи");
    createDivPRadio('Напишите цель встречи', ['Знакомство', 'Презентация продукта']);
    progress++
}

function useMitingPickUp() {
    createHeader("Назначение встречи. Знакомство");
    createDivPRadio('Напишите формат встречи, который предполагается в вашей компании', ['Offline', 'Online', 'Формат встречи не имеет значения']);
    progress++
}

function useMitingPickUpOffline() {
    createHeader("Назначение встречи. Знакомство. Offline");
    createDivPRadio('Напишите, какой вариант встречи возможен', ['Наш офис', 'Офис клиента', 'Не важно где пройдет встреча']);
    progress++
}

function useMitingPickUpOfflineOurOffice() {
    createHeader("Назначение встречи. Знакомство. Offline. Наш офис");
    createDivPSpanInput("Напишите адрес вашего офиса ", "Например: Невский проспект, дом 35, БЦ Атриум");
    createDivPSpanInput("Напишите, сколько времени потребуется на встречу", "Например: 1 час");
    progress+=13;
}

function useMitingPickUpOfflineСlientOffice() {
    createHeader("Назначение встречи. Знакомство. Offline. Офис клиента");
    createDivPSpanInput("Напишите, сколько времени потребуется на встречу", "Например: 1 час");
    progress++
}

function  useMitingPickUpOfflineNoMatterWhere() {
    createHeader("Назначение встречи. Знакомство. Offline. Не важно где пройдет встреча");
    createDivPSpanInput("Напишите, сколько времени потребуется на встречу", "Например: 1 час");
    progress++
}

function useMitingPickUpOnline() {
    createHeader('Назначение встречи. Знакомство. Online')
    createDivPSpanInput('Напишите какое приложение вы будете использовать для связи с клиентом', 'Например: Zoom, Google Meet, Skype')
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час')
    progress+=10;
}

function useMitingPickUpNoMatterWhere(){
    createHeader('Назначение встречи. Знакомство. Формат встречи не имеет значения')
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час')
}

function useMitingProductPresentation() {
    createHeader("Назначение встречи. Презентация продукта");
    createDivPRadio('Напишите формат встречи, который предполагается в вашей компании', ['Offline', 'Online', 'Формат встречи не имеет значения']);
    progress+=4;
}

function useMitingProductPresentationOffline() {
    createHeader('Назначение встречи. Презентация продукта. Offline');
    createDivPRadio('Напишите, какой вариант встречи возможен', ['Наш офис', 'Офис клиента', 'Не важно где пройдет встреча'])
    progress++
}

function useMitingProductPresentationOfflineOurOffice() {
    createHeader('Назначение встречи. Презентация продукта. Offline. Наш офис');
    createDivPSpanInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?')
    createDivPSpanInput('Напишите адрес вашего офиса', 'Например: Невский проспект, дом 35, БЦ Атриум');
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час');
    progress++;
}

function useMitingProductPresentationOfflineClientOffice() {
    createHeader('Назначение встречи. Презентация продукта. Offline. Офис клиента');
    createDivPInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?');
    createDivPInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час')
    progress++
}

function useMitingProductPresentationOfflineNoMatterWhere() {
    createHeader('Назначение встречи. Презентация продукта. Offline. Не важно где пройдет встреча');
    createDivPSpanInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?')
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час')
    progress++
}

function useMitingProductPresentationOnline() {
    createHeader('Назначение встречи. Презентация продукта. Online');
    createDivPSpanInput('Напишите какое приложение вы будете использовать для связи с клиентом', 'Например: Zoom, Google Meet, Skype');
    createDivPSpanInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час');
    progress+=3
}

function useMitingProductPresentationNoMatterWhere() {
    createHeader('Назначение встречи. Презентация продукта. Формат встречи не имеет значения');
    createDivPSpanInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?')
    createDivPInput('Напишите, сколько времени потребуется на встречу', 'Например: 1 час')
    progress++
}

function sendingCommercialOffer() {
    createHeader('Отправка коммерческого предложения')
    createDivPSpanInput('Напишите вопросы, выявляющие потребность, которые нужно задать клиенту, в той последовательности, в которой вы их будете задавать', 'Например: Какой транспорт хотите застраховать? На какой срок обычно страхуете транспорт? Какие проблемы обычно возникают при страховании и дальнейшем использовании?')
    progress++
}

function finish() {
    createHeader('Завершение')
    createDivPSpanInput('На этом закончим. Напишите, как вы вообще?', 'Например: Отлично, продуктивно, интересно');
    progress++
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
    container.appendChild(div);

}

