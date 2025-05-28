const Todo_list = [];

function addTodo() {
    const inputed_todo = document.querySelector('.todo_input');
    const name = inputed_todo.value;
    
    Todo_list.push(name);
    console.log(Todo_list);

    inputed_todo.value = "";
}