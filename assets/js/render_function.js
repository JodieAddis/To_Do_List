import {ToDoThings} from './object.js'; 

export const toDoList = document.querySelector('.global_list');//On sélectionne la section contenant le <ul>

export function renderTodo(){
    if(ToDoThings.length === 0){
        toDoList.innerHTML= '<center>Nothing to do</center>'
        return
    }
    //Clear element before a re-render
    toDoList.innerHTML = '';
    //Ajout du code HTML pour chaque objet de l'array, donc chaque input
    ToDoThings.forEach((ToDo, index) => {
        toDoList.innerHTML += `
            <ul class="my_list" id=${index}>
                <li id='element'>
                    <input type='checkbox' id='check'>
                    ${ToDo.value}
                </li>
                <i class="bi bi-trash3" data-action="delete"></i>
            </ul>
        ` 
    })
}

//First render
// renderTodo();//a mettre après la fonction render importée
