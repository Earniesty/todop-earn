import {Todo} from "./todo.js"
function todoManagement() {
    let todos = []

    function addTodo(desc) {
        const newTodo = new Todo( undefined ,desc, done)
        todos.push(newTodo)
        return newTodo.id
    }

    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId)
        
    }

    function findIndexTodo(searchId) {
        return todos.findIndex((todo) => todo.id === searchId)
    }

    function removeTodo(removeId) {
        const removeIndex = findIndexTodo(removeId)
        if (removeIndex) {
        todos.splice(removeIndex, 1)
        return true
        } else {
            return false;
        }
    }

    function getTodo() {
        return todos;
    }

    function getNumberOfDone() {
        return todos.find((todo) => todo.done === true).length
    }   

    function getNumberOfNotDone() {
        return todos.find((todo) => todo.done === false).length
    }

    function clearTodo() {
        todos = []
        
    }

    function setItemToDone(doneId) {
        todos.find((todo) => todo.id === doneId)
        if (doneItem !== undefined) doneItem.setDone(true)

    }
    return {
        addTodo,
        removeTodo,
        findTodo,
        getTodo,
        getNumberOfDone,
        getNumberOfNotDone,
        setItemToDone,
        clearTodo
      }

}

export {todoManagement}