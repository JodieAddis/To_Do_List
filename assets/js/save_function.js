import {ToDoThings} from './object.js';

const toDoInput = document.querySelector('#newItem'); 

export function saveToDo(){
    const ToDoValue = toDoInput.value; //On récupère la valeur de l'input

    const emptyArea = toDoInput.value === ''; //Désigne le champ d'écriture vide

    if (emptyArea){
        alert('Please, write to do');//Mets une alerte si submit sans avoir écrit
    } else {
        const ToDo = {
            value : ToDoValue,
        }
        ToDoThings.push(ToDo); //Injecte les objet ToDo dans l'array toDoThings
        
        toDoInput.value = ''; //Ré-initialise après avoir submit
    
        // console.log(ToDoThings); 
    }
}

