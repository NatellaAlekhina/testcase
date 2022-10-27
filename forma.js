//2.4 Сделать в отдельном файле форму с 5 выпадающими списками и 2 полями для ручного ввода информации. Списки должны содержать цифры от 1 до 5. Также нужна кнопка для отправки формы.

let form = document.createElement('form');

for(i=1; i<6; i++) {
let nameOfButton = "buttonFormDown" + i;
let nameOfUl = ".dropdown-menu" + i;
let buttonDownForm = document.getElementById(nameOfButton);
let countClick = 0;

buttonDownForm.onclick  = function() {
    switch(countClick){
        case 0:    
            document.querySelector(nameOfUl).style.display = "flex";
            countClick = 1;
            break;

        case 1:
            document.querySelector(nameOfUl).style.display = "none";
            countClick = 0;
            break;
    }
}
}


//2.5 Сделать формирование JSON-структуры из данных формы. Выводить ее на экран под формой. Отправка формы не должна перезагружать страницу.

let submitButton = document.querySelector(".submitButton");
submitButton.onclick = function(){
    let object = {};
    let formData = new FormData(document.forms.formDataSave);

    formData.forEach(function(value, key){
        if(value === ""){
            return;
        } else {
            object[key] = value;
        }  
    });

    if(Object.keys(object).length === 0){
        alert("Вы еще не заполнили никакие данные! Попробуйте снова!");
    } else {
        let json = JSON.stringify(object);
        let jsonAnswer = document.createElement("div");
        jsonAnswer.className = "jsonSnswer";
        jsonAnswer.innerHTML = "Вы ввели следующие данные: " + json;
        document.body.append(jsonAnswer);

        makeGETRequest("https://ya.ru/");
    }
}

