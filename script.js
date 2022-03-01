const result = [];

let btn = document.querySelector("#btn")
btn.addEventListener("click", function (e) {
    change();
});

function change() {
    let container = document.querySelector(".container")
    let elements = container.querySelectorAll(".change")
    console.log(elements);
    pushData(elements);
    removeElements(container);
    createElementsWelcome(container);

}

function pushData(elements) {
    for (let i = 0; i < elements.length; i++) {
        let input = elements[i].querySelector('input');
        // console.log(input);
        result.push(input.value);

    }
    console.log(result);
}


function removeElements(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

}

function createElementsWelcome(container) {

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

