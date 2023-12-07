import {todoManagement} from "../libs/todoManagement.js";
function userInterface() {
  function showTodoItem(newId, newDescription) {
    const divListTodo = document.getElementById("listTodo");
    const newdiv = document.createElement("div");
    newdiv.classList.add('todoItem')
    newdiv.setAttribute("id", newId);

    const newP = document.createElement("p");
    newP.textContent = `${newDescription}`;
    newdiv.appendChild(newP);

    const btn01 = document.createElement("button");
    btn01.textContent = "Not done";
    newdiv.appendChild(btn01);

    const btn02 = document.createElement("button");
    btn02.textContent = "remove";
    newdiv.appendChild(btn02);

    divListTodo.appendChild(newdiv)
  }

  function showNumberOfDone(numberOfDone) {
    const doneEle = document.getElementById("done");
    doneEle.textContent = `Number of Done ${numberOfDone}`;
  }

  function showNumberOfNotDone(numberOfNotDone) {
    const notDoneEle = document.getElementById("notDone");
    notDoneEle.textContent = `Number of Not Done ${numberOfNotDone}`;
  }

  function removeTodoItem(removeId) {
    const removeTodoNode = document.getElementById(removeId);
    removeTodoNode.parentElement.removeChild(removeTodoNode);
  }

  return{showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem}

}

export { userInterface }