
const addBtn = document.querySelector('.add');
const removeBtn = document.querySelector('.remove');
const todoList = document.querySelector('.todos');


addBtn.addEventListener('click', showTodo);
//removeBtn.addEventListener('click', removeTodo);

function showTodo() {
    const textInput = document.querySelector('#textInput').value;
    let text = document.createTextNode(textInput);
    let newList = document.createElement('li');

    newList.appendChild(text);
    todoList.appendChild(newList);
}
