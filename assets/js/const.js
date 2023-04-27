

const form = document.querySelector('.item_submission'); 
const toDoInput = document.querySelector('#newItem'); 

form.addEventListener('submit', function (event){
    event.preventDefault() ; 
    // console.log('submit');
    saveToDo(); //Fonction définit par la suite
    renderTodo();

    localStorage.setItem('ToDoThings', JSON.stringify(ToDoThings)); 
})

let ToDoThings = JSON.parse(localStorage.getItem('ToDoThings')) || [];

//On définit la fonction saveToDo()
function saveToDo(){
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
    
        console.log(ToDoThings); 
    }
}

/* RENDER A TODO */
const toDoList = document.querySelector('.global_list');//On sélectionne la section contenant le <ul>

function renderTodo(){
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
                <div id='container_element'>
                        <li id='element'>
                            <input type='checkbox' id='check'>
                            ${ToDo.value}
                        </li>
                        <button id='delete' data-action="delete-item"><img src="./assets/img/trash3.svg" id='trash' data-action="delete"></button>
                </div>
            </ul>
        ` 
    })
}

//First render
renderTodo(); 

/* TARGET A TODO : click event listener for all the todo*/
toDoList.addEventListener('click', (event) => {
    const target = event.target ;//On sait quel élément exactement est cliqué
    // console.log(target); 
    const parentElement = target.parentNode ; 
    // console.log(parentElement); 
    if(parentElement.className !== 'my_list') return ; //Permet d'afficher le parent uniquement sur les éléments de liste et non le container
    const todo = parentElement; 
    const todoId = Number(todo.id);//Permet de comparer aux index de l'array

    const action = target.dataset.action;

    console.log(todoId, action);

    action === "delete-item" && deleteToDo(todoId); 
})


const buttonDelete = document.getElementById('delete').addEventListener('click', deleteToDo); 
// function deleteToDo(todoId){
//     ToDoThings = ToDoThings.filter((todo, index) => index !== todoId); 
//     ToDoThings.splice(todoId, 1);

//     renderTodo(); 

//     localStorage.setItem('TodoThings', JSON.stringify(ToDoThings)); 
// }



function deleteToDo(){
    const item = document.getElementById('element'); 
    const container = document.getElementById('container_element');
    // const itemAndButton = item + buttonDelete; 
    container.removeChild(item); 

    localStorage.setItem('TodoThings', JSON.stringify(ToDoThings)); 
}
