const Todo_list = [];

function addTodo() {
    const inputed_todo = document.querySelector('.todo_input');
    const name = inputed_todo.value;
    
    Todo_list.push(name);
    console.log(Todo_list);

    inputed_todo.value = "";
}






// Na here the second one start from

// const secondTo_doList = [{}];

// function renderList() {
//   let todoListHtml = "";
//   for (let i = 0; i < secondTo_doList.length; i++) {
//     const elementObject = secondTo_doList[i];
//     const {name, dueDate} = elementObject;
//     const html = `<p>${name} ${dueDate} <button onclick="Delete(${i})">Delete</button></p>`;
//     todoListHtml += html;
//   }
//   document.querySelector('.display').innerHTML = todoListHtml;
// }

// function secondAddTodo() {
//   const input = document.querySelector('.second_todo');
//   const value = input.value;
//   const dateInputeElement = document.querySelector('.due_Date');
//   const due_Date = dateInputeElement.value;
//   if (value === "") {
//     return;
//   } else {
//     secondTo_doList.push({value: value, due_Date: due_Date});
//     input.value = '';
//     renderList();
//   }
  
// }


const secondTo_doList = [];

function renderList() {
  let todoListHtml = "";

  for (let i = 0; i < secondTo_doList.length; i++) {
    const { name, dueDate } = secondTo_doList[i];
    todoListHtml += `
      <div>${name} </div> 
      <div> Due: ${dueDate} </div>
      <button onclick="Delete(${i})" class="delete_B">Delete</button>
    `;
  }

  document.querySelector('.display').innerHTML = todoListHtml;
}

function secondAddTodo() {
  const input = document.querySelector('.second_todo');
  const dateInput = document.querySelector('.due_Date');

  const name = input.value.trim();
  const dueDate = dateInput.value;

  if (name === "" || dueDate === "") {
    return; // Do nothing if either field is empty
  }

  secondTo_doList.push({ name, dueDate });

  input.value = "";
  dateInput.value = "";

  renderList();
}

function Delete(i) {
  secondTo_doList.splice(i, 1);
  renderList();
}

