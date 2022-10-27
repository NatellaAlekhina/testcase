//2.1 В тестовом файле из задания один сделать, чтобы при нажатии кнопки "Кнопка 1" скрывался блок с заголовком. При повторном нажатии блок должен появляться.

jQuery.noConflict();

let buttonYellow = document.querySelector(".btn-warning");
jQuery("#headerBreaker").css("display","flex");
let headerDisplayStatus = jQuery("#headerBreaker").css("display");
console.log(headerDisplayStatus);
buttonYellow.onclick = scrollHeader;

function scrollHeader() {
    switch(headerDisplayStatus) {
        case "none":
            jQuery("#headerBreaker").css("display","flex");
            headerDisplayStatus = jQuery("#headerBreaker").css("display");
            console.log("Элемент возвращен");
            console.log(headerDisplayStatus);
            break;
        case "flex":
            jQuery("#headerBreaker").css("display","none");
            headerDisplayStatus = jQuery("#headerBreaker").css("display");
            console.log("Элемент убран");
            console.log(headerDisplayStatus);
            break;
    }
}

//2.2 При нажатии кнопки "Кнопка 2" средний блок во втором ряду должен меняться местами с левым блоком. При повторном нажатии - возвращаться на прежнее место.

let buttonGreen = document.querySelector(".btn-success");
let blockChangeId = 1;
buttonGreen.onclick = changeBlocks;

function changeBlocks() {
    let secondBlock = document.querySelector(".three_row");   

    switch(blockChangeId) {
        case 1:
            document.querySelector(".second_of_three").innerHTML = "<h2>1</h2>";
            document.querySelector(".second_of_three").className = "first_of_three";
            document.querySelector(".first_of_three").innerHTML = "<h2>2</h2>";
            document.querySelector(".first_of_three").className = "second_of_three";
            console.log("2 стал 1");
            blockChangeId = 2;
            break;

        case 2:
           
            secondBlock.innerHTML = '<div class="first_of_three"><h2>1</h2></div><div class="second_of_three"><h2>2</h2></div><div class="third_of_three"></div>';
            console.log("1 стал 2");
            blockChangeId = 1;
            break;
    
    }
}

//2.3 Сделать, чтобы при открытии страницы появлялось модальное окно с надписью "Привет, мир".

window.onload = function showModalWindow() {
    let modalWindowElement = document.getElementById("modalWindow");
    modalWindowElement.showModal();

    modalWindowElement.onclick = function() {
        document.getElementById("modalWindow").close();
    };
    
};