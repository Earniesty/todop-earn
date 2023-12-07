import { todoManagement } from "../libs/todoManagement.js"
import { userInterface } from "../UI/todoList.js"
// const todoManagement = require('../libs/todoManagement.js')
// const userInterface = require('../UI/todoList.js')
// const {addTodo} = todoManagement
// const {showTodoItem} = userInterface
const {showTodoItem} =
  userInterface()
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos,
  clearTodo
} = todoManagement()

function addTodoHandler() {

const addBtn = document.getElementById('addBtn')
    // const divAddTodo = document.getElementById('addTodo')
    const inputAdd = document.querySelector('input')
    console.log(inputAdd.value);
    if(inputAdd) {
        const desc = inputAdd.value
        console.log(todoManagement);
        const newTodoId = addTodo(desc)
        showTodoItem(newTodoId, desc)
    }

}

export {addTodoHandler}