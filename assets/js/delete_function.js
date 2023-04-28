import {ToDoThings} from './object.js';
import {renderTodo} from './render_function.js'; 

//Fonction deleteToDo()

export function deleteToDo(todoId){
    ToDoThings.splice(todoId, 1);
    //re-render
    renderTodo(); 
    //Suppression de la tâche en cache 
    localStorage.setItem('ToDoThings', JSON.stringify(ToDoThings));
}