//let inputTag = document.querySelector('#addTodo').children[1]
//ผconsole.log(inputTag);

// import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from './UI/todoList.js'
// import { addTodoHandler } from './eventHandler/eventController.js'
//import { addTodo, findTodo, findIndexTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo} from './lib/TodoListManagement.js'
import { TodoListManagement } from './lib/TodoListManagement.js'

const { addTodo, findTodo, findIndexTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemTodo } = TodoListManagement()

// showTodoItem( addTodo('Watch Movies',true), 'Watch Movies') ;
// showTodoItem( addTodo('Visit Grandmother'), 'Visit Grandmother') ;
// showTodoItem(addTodo('Coding'), 'Coding') ;

// showNumberOfDone(getNumberOfDone())
// showNumberOfNotDone(getNumberOfNotDone())


import {
  //addTodoHandler, 
  loadHandler, beforeUnloadHandler
} from './eventHandler/eventController.js'

window.addEventListener('load', () => {
  loadHandler()
})
window.addEventListener('beforeunload', (event) => {
  beforeUnloadHandler(event)
})


