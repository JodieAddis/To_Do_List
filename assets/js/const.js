

let a = 12;
let b = 15; 
console.log(a+b);//Test 

const form = document.querySelector('.item_submission'); 
const toDoInput = document.querySelector('#newItem'); 

form.addEventListener('submit', function (event){
    event.preventDefault() ; 
    // console.log('submit');
    saveToDo(); //Fonction définit par la suite
    renderTodo();
})

let ToDoThings = [];//On va stocker les entrées dans un array, donc chaque élément sauvegarder dans l'array sera un objet

//On définit la fonction saveToDo()
function saveToDo(){
    const ToDoValue = toDoInput.value; //On récupère la valeur de l'input

    const emptyArea = toDoInput.value === ''; //Désigne le champ d'écriture vide

    if (emptyArea){
        alert('Please, write to do');//Mets une alerte si submit sans avoir écrit
    } else {
        const ToDo = {
            value : ToDoValue, 
            checked : false, //Non coché
            color : '#' + Math.floor(Math.random()*16777215).toString(16),//Couleur générée aléatoirement pour chaque 'to do'
        }
        ToDoThings.push(ToDo); //Injecte les objet ToDo dans l'array toDoThings
        
        toDoInput.value = ''; //Ré-initialise après avoir submit
    
        console.log(ToDoThings); 
    }
}

/* RENDER A TODO */
const toDoList = document.querySelector('.global_list');//On sélectionne la section contenant le <ul>

function renderTodo(){
    //Clear element before a re-render
    toDoList.innerHTML = '';
    //Ajout du code HTML pour chaque objet de l'array, donc chaque input
    ToDoThings.forEach((ToDo, index) => {
        toDoList.innerHTML += `
            <ul class="my_list" id=${index}>
                <i class="bi ${ToDo.cheked ? 'bi-check-circle' : 'bi-circle'}"
                style='color : ${ToDo.color}'
                data-action='check'
                ></i>
                <li data-action='check'>${ToDo.value}</li>
                <i class="bi bi-trash3" data-action='delete'></i>
            </ul>
        ` 
    })
}

/* TARGET A TODO : click event listener for all the todo*/
toDoList.addEventListener('click', (event) => {
    const target = event.target ;//On sait quel élément exactement est cliqué
    // console.log(target); 
    const parentElement = target.parentNode ; 
    // console.log(parentElement); 
    if(parentElement.className !== 'my_list') return ; //Permet d'afficher le parent uniquement sur les éléments de liste et non le container
    const todo = parentElement; 
    const todoId = Number(todo.id);//Permet de comparer aux index de l'array

    //Cibler les actions 'check' et 'delete'
    const action = target.dataset.action;

    action === 'check' && checkToDo(todoId); 
    action === 'delete' && deleteToDo(todoId); 
})

//Création des fonctions permettant les actions 'check' et 'delete'
function checkToDo(todoId){
    ToDoThings = ToDoThings.map((todo, index) => {
        if(index === todoId){
            return {
                value : todo.value,
                color : todo.color,
                checked : !todo.checked,
            }
        } else {
            return {
                value : todo.value,
                color : todo.color,
                checked : todo.checked,
            }
        }
    }); //???
}

/* Possibilité d'écrire le 'if' autrement, car on se répète : 
        if(){
            return {
                value : todo.value,
                color : todo.color,
                checked : index === todoId ? !todo.checked : todo.checked,
            }
        }
    }
*/


/* Delete a todo */
function deleteToDo(todoId){
    ToDoThings = ToDoThings.filter((todo, index) => index !== todoId); 
    //Re-render
    renderTodo(); 
}


