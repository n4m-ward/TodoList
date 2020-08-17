var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos'))||[];
function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        listElement.appendChild(linkElement);
    }
}

renderTodos();


function addTodo(){
    var todoTexto = inputElement.value;
    todos.push(todoTexto);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}
buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));

}