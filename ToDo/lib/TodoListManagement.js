import { Todo }  from './todo.js'
//const { Todo } = require('./todo.js') 

function TodoListManagement() {
    let todos = []
   
    function addTodo(desc) {
         const todo = new Todo(undefined ,desc)
        todos.push(todo)
        return todo.id
    }
    function findTodo(searchId) {
        return todos.find(a => a.id === searchId)
    }
    function findIndexTodo(searchId) {
        return todos.findIndex(a => a.id === searchId)
    }
    function removeTodo(removeId) {
        todos.splice(findIndexTodo(removeId), 1)
    }
    function getTodos() {
        return todos
    }
    function getNumberOfDone() {
        return todos.filter(a => a.done === true).length
    }
    function getNumberOfNotDone() {
        return todos.filter(a => a.done === false).length
    }
    function clearTodo() {
        todos = []
    }
    function setItemTodo(doneId) {
         for (const i of todos) {
             if (i.id===Number(doneId)) {
             i.setDone(true)
        }   
      }  
    }
    function loadTodos(userTodos){
        userTodos.forEach((todo) => {

        todos.push( new Todo(undefined ,todo.description,todo.done))
          //addTodo(todo.description,todo.done)
        })
        
    }
    return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo,setItemTodo ,loadTodos}
}
const { addTodo, findTodo, findIndexTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo,setItemTodo  } = TodoListManagement()
// console.log(addTodo( 'aj'));
// console.log(addTodo('jj'));
// console.log(addTodo('kk'));
// console.log(addTodo('uu'));
//console.log(getTodo());

// console.log('------------');
// console.log(findTodo(1));
// console.log(findTodo(2));
// console.log(findTodo(4));

// console.log('------------');
// console.log(findIndexTodo(1));
// console.log(findIndexTodo(2));
// console.log(findIndexTodo(4));

// console.log('------------');
// removeTodo(1);
// removeTodo(2);
// removeTodo(4);
//  console.log(getTodo());
//  console.log(setItemTodo(1));


//export {  addTodo, findTodo, findIndexTodo, removeTodo, getTodo, getNumberOfDone, getNumberOfNotDone, clearTodo }
export {  TodoListManagement}



// let a = [{a:1},{b:2 , c : 4}]
// console.log(Object.keys(a[1])[0]);