import { add } from './add_function.js';
import { renderTodo, toDoList } from './render_function.js';
import {targetElement} from './target.js';

//Variables/constantes
const form = document.querySelector('.item_submission'); 

//Appel des fonctions
renderTodo(); 


//Evènements
form.addEventListener('submit', add);
toDoList.addEventListener('click', targetElement); 



