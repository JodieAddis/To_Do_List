import './save_function';
import './render_function'; 

const form = document.querySelector('.item_submission'); 

form.addEventListener('submit', function (event){
    event.preventDefault() ; 
    // console.log('submit');
    saveToDo(); //Fonction définit par la suite
    renderTodo();

    localStorage.setItem('ToDoThings', JSON.stringify(ToDoThings)); 
})