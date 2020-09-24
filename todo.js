var listElement = document.getElementById('ul')
var inputElement = document.getElementById('input')
var buttonElement = document.getElementById('button')

var todos = JSON.parse(localStorage.getItem('list_item')) || [];


function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('img');
        linkElement.setAttribute('src','icon.png');
        var pos = todos.indexOf(todo)

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        var linkText = document.createTextNode('excluir');

        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText)
    inputElement.value = '';

    renderTodos();
    saveToStorage()
}

function deleteTodo(pos){

    todos.splice(pos, 1)
    renderTodos();
    saveToStorage()
    
}

function saveToStorage(){
    localStorage.setItem('list_item', JSON.stringify(todos))
}

renderTodos();

buttonElement.onclick = addTodo;