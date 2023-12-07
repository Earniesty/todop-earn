// const {addTodoHandler} = require('./eventHandler/eventController.js')
import {addTodoHandler} from './eventHandler/eventController.js'

addBtn.addEventListener('click', (event) => {
    addTodoHandler();
})
