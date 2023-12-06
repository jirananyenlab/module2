import { TodoListManagement } from '../lib/TodoListManagement.js'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } from '../UI/todoList.js'
const { addTodo, findTodo, findIndexTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemTodo, loadTodos } = TodoListManagement()

function addTodoHandler() {
    const input = document.querySelector('input')
    if (input.value.length > 0) { 
        const newTodo = addTodo(input.value)
        showTodoItem(newTodo, input.value)
    }
    showNumberOfNotDone(getNumberOfNotDone())
    showNumberOfDone(getNumberOfDone())

    const todoItem = document.querySelectorAll('.todoItem')
    for (const todoItems of todoItem) {
        console.log(todoItems.children[1]);
        const btnND = todoItems.getElementsByTagName('button')[0]
        const btnRM = todoItems.getElementsByTagName('button')[1]

        btnND.addEventListener('click', function notDoneButtonHandle() {
            console.log(setItemTodo(todoItems.id));  // todoItems มาจาก HTML เป็น String 
            btnND.style = 'background-color: green;'
            btnND.style.color = 'white'
            btnND.textContent = 'Done'
            showNumberOfNotDone(getNumberOfNotDone())
            showNumberOfDone(getNumberOfDone())
        })

        btnRM.addEventListener('click', function removeTodoHandle() {

            removeTodoItem(todoItems.id)
            removeTodo(todoItems.id)
            showNumberOfNotDone(getNumberOfNotDone())
            showNumberOfDone(getNumberOfDone())
        })
    }
    console.log(getTodos());

}

function beforeUnloadHandler(event) {
    //event.preventDafault()
    localStorage.setItem('todos', JSON.stringify(getTodos()))
    clearTodo()
}


function loadHandler() {
    let value = JSON.parse(localStorage.getItem('todos'))
    console.log(value);
    const buttonAdd = document.getElementById('addBtn')
    buttonAdd.addEventListener('click', addTodoHandler)
    if (value !== null && value !== undefined && value?.length > 0) {
        loadTodos(value)    
        console.log( getTodos());  
        getTodos().forEach((todo) => {
            showTodoItem(todo.id, todo.description)
            console.log(todo.done);
                const notdone = document.getElementById(todo.id).children[1]
            if (todo.done === true) {
                console.log(notdone);
                notdone.style = 'background-color: green;'
                notdone.style.color = 'white'
                notdone.textContent = 'Done'
            }
              notdone.addEventListener('click', function notDoneButtonHandle() {
                console.log(todo.id);
                 setItemTodo(todo.id);
               notdone.style = 'background-color: green;'
               notdone.style.color = 'white'
               notdone.textContent = 'Done'
                showNumberOfNotDone(getNumberOfNotDone())
                showNumberOfDone(getNumberOfDone())
            })
    
            const remove = document.getElementById(todo.id).children[2]
            remove.addEventListener('click', function removeTodoHandle() {
                removeTodoItem(todo.id)
                removeTodo(todo.id)
                showNumberOfNotDone(getNumberOfNotDone())
                showNumberOfDone(getNumberOfDone())
            })
        })
        showNumberOfNotDone(getNumberOfNotDone())
        showNumberOfDone(getNumberOfDone())
    }
    
}

export { addTodoHandler, loadHandler, beforeUnloadHandler }

