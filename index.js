const Todo_list = [];

function addTodo() {
    const inputed_todo = document.querySelector('.todo_input');
    const name = inputed_todo.value;
    
    Todo_list.push(name);
    console.log(Todo_list);

    inputed_todo.value = "";
}






// Na here the second one start from

const secondTo_doList = [{
    name: '',
    due_date: ''
}];

function renderList() {
  let todoListHtml = "";
  for (let i = 0; i < secondTo_doList.length; i++) {
    const element = secondTo_doList[i];
    todoListHtml += `<p>${element} <button onclick="Delete(${i})">Delete</button></p>`;
  }
  document.querySelector('.display').innerHTML = todoListHtml;
}

function secondAddTodo() {
  const input = document.querySelector('.second_todo');
  const value = input.value;
  if (value === "") {
    return;
  } else {
    secondTo_doList.push(value);
    input.value = '';
    renderList();
  }
  
}

function Delete(i) {
  secondTo_doList.splice(i, 1);
  renderList();
}
