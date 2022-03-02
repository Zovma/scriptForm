const result = [];
const container = document.querySelector(".container")
let progress = 0;

let btn = document.querySelector("#btn")
btn.addEventListener("click", function (e) {
    change();
});

function change() {
    let elements = container.querySelectorAll(".change")
    // console.log(elements);
    pushData(elements);
    removeElements(container);
    createElements(container);

}

function pushData(elements) {
    for (let i = 0; i < elements.length; i++) {
        let input = elements[i].querySelector('input');
        // console.log(input);
        result.push(input.value);

    }
    // console.log(result);
}


function removeElements() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

}

function createElements() {

    switch (progress) {
        case 0:
            welcom();
            progress++;
            break;
        case 1:
            missionCall();
            progress++;
            break;
        case 3:
            console.log("Доход равен 300");
            break;
    }
}



function welcom() {
    let div = document.createElement("div");
    div.className = "change"
    let p = document.createElement("p");
    let input = document.createElement("input");
    let elemText = document.createTextNode("Напишите должность сотрудника, который звонит");
    p.appendChild(elemText);
    div.appendChild(p);
    div.appendChild(input);
    container.appendChild(div);

    let div2 = document.createElement("div");
    div2.className = "change"
    let p2 = document.createElement("p");
    let input2 = document.createElement("input");
    let span = document.createElement("span");
    let elemText2 = document.createTextNode("Напишите форму вашей организации");
    let elemText22 = document.createTextNode('Например: "компания", "юридическая фирма", "автосервис", "салон красоты"')
    p2.appendChild(elemText2);
    span.appendChild(elemText22)
    div2.appendChild(p2);
    div2.appendChild(span);
    div2.appendChild(input2);
    container.appendChild(div2);

    let div3 = document.createElement("div");
    div3.className = "change"
    let p3 = document.createElement("p");
    let input3 = document.createElement("input");
    let elemText3 = document.createTextNode("Напишите название вашей организации");
    p3.appendChild(elemText3);
    div3.appendChild(p3);
    div3.appendChild(input3);
    container.appendChild(div3);

}

function missionCall() {

    let h2 = document.createElement("h2");
    let textH2 = document.createTextNode("Цель звонка");
    h2.appendChild(textH2)
    console.log(container);
    container.appendChild(h2);

    let div1 = document.createElement("div");
    div1.className = "change"
    let p1 = document.createElement("p");
    let input1 = document.createElement("input");
    let span1 = document.createElement("span");
    let elemText1 = document.createTextNode("Напишите коротко о деятельности вашей организации и о тех реальных преимуществах, которые вы имеете в сравнении с конкурентами");
    let elemText11 = document.createTextNode('Например: Мы занимаемся предоставлением пропусков для грузовых автомобилей в Москву. Взаимодействуя напрямую с департаментом транспорта имеем очень быстрое оформление и высокую степень одобрения - 99%');
    p1.appendChild(elemText1);
    span1.appendChild(elemText11)
    div1.appendChild(p1);
    div1.appendChild(span1);
    div1.appendChild(input1);
    container.appendChild(div1);




    let div2 = document.createElement("div");
    
    let p2 = document.createElement("p");
    let textP2 = document.createTextNode("Выберете цель данного звонка");
    p2.appendChild(textP2)

    let radio1 = document.createElement("input");
    radio1.type = "radio";
    radio1.value = "Выявление потребностей";
    radio1.name = "mission";
    let span2 = document.createElement("span");
    let textSpan2 = document.createTextNode("  Выявление потребностей (перед звонком с презентацией продукта)");
    span2.appendChild(textSpan2);
    
    let radio2 = document.createElement("input");
    radio2.type = "radio";
    radio2.value = "Подбор и продажа продукта";
    radio2.name = "mission";
    let span3 = document.createElement("span");
    let textSpan3 = document.createTextNode("  Подбор и продажа продукта (здесь и сейчас)");
    span3.appendChild(textSpan3);

    let radio3 = document.createElement("input");
    radio3.type = "radio";
    radio3.value = "Назначение встречи";
    radio3.name = "mission";
    let span4 = document.createElement("span");
    let textSpan4 = document.createTextNode("  Назначение встречи (знакомство или презентация продукта)");
    span4.appendChild(textSpan4);

    let radio4 = document.createElement("input");
    radio4.type = "radio";
    radio4.value = "Отправка коммерческого предложения";
    radio4.name = "mission";
    let span5 = document.createElement("span");
    let textSpan5 = document.createTextNode("  Отправка коммерческого предложения (здесь и сейчас)");
    span5.appendChild(textSpan5);

    div2.appendChild(p2);


    let pRadio1 = document.createElement("p");
    pRadio1.appendChild(radio1)
    pRadio1.appendChild(span2)
    div2.appendChild(pRadio1);


    let pRadio2 = document.createElement("p");
    pRadio2.appendChild(radio2)
    pRadio2.appendChild(span3)
    div2.appendChild(pRadio2);

    let pRadio3 = document.createElement("p");
    pRadio3.appendChild(radio3)
    pRadio3.appendChild(span4)
    div2.appendChild(pRadio3);

    let pRadio4 = document.createElement("p");
    pRadio4.appendChild(radio4)
    pRadio4.appendChild(span5)
    div2.appendChild(pRadio4);

    container.appendChild(div2);





}

