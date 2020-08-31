
const addBtn = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const todoBody = document.querySelector('.todoBody');
let textInput = document.querySelector('#textInput');

addBtn.addEventListener('click', showTodo);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        showTodo();
    }
});

function showTodo(e) {

    // div list item box(container)
    let itemBox = document.createElement('div');
    itemBox.classList.add("todos");

    // text input value
    let text = textInput.value;

    // input for new list item
    let newList = document.createElement('input');
    newList.classList.add('itemInput');
    newList.value = text;
    newList.disabled = true;
    newList.type = "text";

    //edit button
    let editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.innerHTML = "EDIT";

    //remove button
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.innerHTML = "REMOVE";

    itemBox.appendChild(newList);
    itemBox.appendChild(editBtn);
    itemBox.appendChild(removeBtn);
    if (text !== "") {
        todoBody.appendChild(itemBox);
    }

    textInput.value = "";

    // update button
    let updateBtn = document.createElement("button");
    updateBtn.classList.add("updateBtn");
    updateBtn.innerHTML = "UPDATE";
    updateBtn.style.display = "inline-block";

    // listener for edit button
    editBtn.addEventListener('click', () => {
        itemBox.insertBefore(updateBtn, editBtn);
        todoBody.appendChild(itemBox);
        newList.disabled = !true;
        newList.focus();
    });

    // listener for update button
    updateBtn.addEventListener('click', () => {
        itemBox.removeChild(updateBtn);
        newList.disabled = true;
        if(newList.value == "") {
            todoBody.removeChild(itemBox);
        }


    });

    // listener for remove button
    removeBtn.addEventListener('click', () => {
        todoBody.removeChild(itemBox);
    });


}


