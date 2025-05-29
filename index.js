const Todo_list = [];

function addTodo() {
    const inputed_todo = document.querySelector('.todo_input');
    const name = inputed_todo.value;
    
    Todo_list.push(name);
    console.log(Todo_list);

    inputed_todo.value = "";
}


const secondTo_doList = [];

function secondAddTodo() {
    const SecondInputed_todo = document.querySelector('.second_todo');
    const SecondName = SecondInputed_todo.value;
    
    secondTo_doList.push(SecondName);
    console.log(secondTo_doList);

    for (let i = 0; i < secondTo_doList.length; i++) {
        const element = secondTo_doList[i];
        const html = "<p></p>"
        
    }




    SecondInputed_todo.value = "";
}