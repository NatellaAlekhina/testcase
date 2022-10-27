//2.6 Форма должна отправлять асинхронный GET-запрос к абстрактному обработчику на том же сервере (в той же папке). В случае, если данные дошли, надо получать ответ. Можно выводить его через alert.

jQuery.noConflict();

function makeGETRequest(url) {
    var xhr;

    if (window.XMLHttpRequest) {
        // Chrome, Mozilla, Opera, Safari
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // Internet Explorer
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("getAnswercode").innerHTML = "Код ответа GET-запроса: " + this.status +" Статус: выполнен";
       } else if (this.readyState < 4){
            document.getElementById("getAnswercode").innerHTML = "Ожидаем ответ запроса";
       } else {
            document.getElementById("getAnswercode").innerHTML = "Код ответа GET-запроса: " + this.status + " Ой! Ошибка запроса";
       }
    }

    xhr.open("GET", url, true);
    xhr.send();
}
