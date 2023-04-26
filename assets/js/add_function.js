import './const.js'; 
import { list, new_item } from './const.js';


//Création des li à partir de l'input

new_item.addEventListener('keyup', addNewItem); 

export const addNewItem=function(e){

	let li=document.createElement('li');//Create new 'li'

	let input=document.createElement('input');//Create the checkbox

	let label=document.createElement('label');//Create the label
	
	let deleteBtn=document.createElement('button');//Create delete button
    
	input.type="text";//Type of the input

	deleteBtn.innerText="X"; //text button 'delete'
	deleteBtn.className="delete";

	label.innerHTML += `${e.key}`;//Insertion des inputs dans le label créé

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(deleteBtn); 
    list.appendChild(li); 

	return li ;
}

let a = 12;
let b = 15; 

console.log(a+b); 