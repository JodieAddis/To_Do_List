

const form = document.querySelector('.item_submission'); 
// const toDoInput = document.querySelector('#newItem'); 

form.addEventListener('submit', add);

// function add (event){
//     event.preventDefault() ; 
//     // console.log('submit');
//     saveToDo(); //Fonction définit par la suite
//     renderTodo();
//     localStorage.setItem('ToDoThings', JSON.stringify(ToDoThings)); 
// }

// let ToDoThings = JSON.parse(localStorage.getItem('ToDoThings')) || [];

//On définit la fonction saveToDo()
// function saveToDo(){
//     const ToDoValue = toDoInput.value; //On récupère la valeur de l'input

//     const emptyArea = toDoInput.value === ''; //Désigne le champ d'écriture vide

//     if (emptyArea){
//         alert('Please, write to do');//Mets une alerte si submit sans avoir écrit
//     } else {
//         const ToDo = {
//             value : ToDoValue,
//         }
//         ToDoThings.push(ToDo); //Injecte les objet ToDo dans l'array toDoThings
        
//         toDoInput.value = ''; //Ré-initialise après avoir submit
    
//         console.log(ToDoThings); 
//     }
// }

/* RENDER A TODO */
// const toDoList = document.querySelector('.global_list');//On sélectionne la section contenant le <ul>

// function renderTodo(){
//     if(ToDoThings.length === 0){
//         toDoList.innerHTML= '<center>Nothing to do</center>'
//         return
//     }
//     //Clear element before a re-render
//     toDoList.innerHTML = '';
//     //Ajout du code HTML pour chaque objet de l'array, donc chaque input
//     ToDoThings.forEach((ToDo, index) => {
//         toDoList.innerHTML += `
//             <ul class="my_list" id=${index}>
//                 <li id='element'>
//                     <input type='checkbox' id='check'>
//                     ${ToDo.value}
//                 </li>
//                 <i class="bi bi-trash3" data-action="delete"></i>
//             </ul>
//         ` 
//     })
// }

// //First render
// renderTodo(); 

/* Cibler une tâche au clic */
toDoList.addEventListener('click', targetElement); 

// function targetElement (event) {
//     const target = event.target ;//On sait quel élément exactement est cliqué
//     // console.log(target); 
//     const parentElement = target.parentNode ; 
//     // console.log(parentElement); 
//     if(parentElement.className !== 'my_list') return ; //Permet d'afficher le parent uniquement sur les éléments de liste et non le container
//     const todo = parentElement; 
//     const todoId = Number(todo.id);//Permet de comparer aux index de l'array
    
//     //Cibler l'attribut action
//     const action = target.dataset.action;

//     action === "delete" && deleteToDo(todoId); 

//     console.log(todoId, action);
// }

//Fonction deleteToDo
// function deleteToDo(todoId){
//     ToDoThings = ToDoThings.filter((ToDo, index) => index !== todoId);
//     //re-render
//     renderTodo(); 
//     //Suppression de la tâche en cache 
//     localStorage.setItem('ToDoThings', JSON.stringify(ToDoThings));
// }
