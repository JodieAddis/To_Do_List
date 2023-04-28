
import {ToDoThings} from './object.js'; 
import {saveToDo} from './save_function.js';
import {renderTodo} from './render_function.js'; 


export function add (event){
    event.preventDefault() ; 
    // console.log('submit');
    saveToDo(); //Fonction définit par la suite
    renderTodo();

    localStorage.setItem('ToDoThings', JSON.stringify(ToDoThings)); 
}
