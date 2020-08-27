
const addBtn = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const todoBody = document.querySelector('.todoBody');
let textInput = document.querySelector('#textInput');

addBtn.addEventListener('click', showTodo);


function showTodo() {
    let itemBox = document.createElement('div');
    itemBox.classList.add("todos");

    let text = textInput.value;
    //let newText = document.createTextNode(text);
    let newList = document.createElement('input');
    newList.value = text;
    newList.disabled = true;
    newList.type = "text";


    let editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.innerHTML = "EDIT";

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.innerHTML = "REMOVE";

    itemBox.appendChild(newList);
    itemBox.appendChild(editBtn);
    itemBox.appendChild(removeBtn);

    todoBody.appendChild(itemBox);
    textInput.value = "";
    editBtn.addEventListener('click', () => {
        newList.disabled = !true;
    });

    removeBtn.addEventListener('click', () => {
        todoBody.removeChild(itemBox);
    });


}


