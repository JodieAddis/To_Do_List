import {deleteToDo} from './delete_function.js';

export function targetElement (event) {
    const target = event.target ;//On sait quel élément exactement est cliqué
    // console.log(target); 
    const parentElement = target.parentNode ; 
    // console.log(parentElement); 
    if(parentElement.className !== 'my_list') return ; //Permet d'afficher le parent uniquement sur les éléments de liste et non le container
    const todo = parentElement; 
    const todoId = Number(todo.id);//Permet de comparer aux index de l'array
    
    //Cibler l'attribut action
    const action = target.dataset.action;

    action === "delete" && deleteToDo(todoId); 

    console.log(todoId, action);
}