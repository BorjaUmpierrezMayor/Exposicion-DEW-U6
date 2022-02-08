window.onload = function () {
    initialize();
}

let lists, list_items;
let list_new, btn_create_li, id;

function initialize() {
    lists = document.querySelectorAll('.list-group');
    list_items = document.querySelectorAll('.list-group-item');

    for(let i = 0; i < lists.length; i++) {
        lists[i].addEventListener("drop", drop, false);
        lists[i].addEventListener("dragover", allowDrop, false);
    }

    for(let i = 0; i < list_items.length; i++) {
        list_items[i].addEventListener("dragstart", drag, false);
    }

    // Crear nuevo elemento.
    list_new = document.getElementById('list-new');
    btn_create_li = document.getElementById('createFile');
    id = list_items.length + 1;

    btn_create_li.addEventListener('click', createLi, false);
}

function allowDrop(ev) {
    // Evita que ocurra el evento por defecto que impide que se deje el elemento arrastrado.
    ev.preventDefault();
}

function drag(ev) {
    // Obtenemos el ID para saber a quién vamos a mover.
    ev.dataTransfer.setData('text/html', ev.target.id);
    console.log(ev);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text/html");
    let li = document.getElementById(data);
    this.appendChild(li);
}

function createLi() {
    let input = document.getElementById('new-task');

    let li = document.createElement('LI');
    li.classList = 'list-group-item';
    li.id = id;
    li.setAttribute('draggable', "true");

    if(input.value.trim() == "") {
        li.innerHTML = '¡Nuevo elemento!';
    } else {
        li.innerHTML = input.value;
        input.value = "";
    }

    list_new.append(li);
    initialize();
}