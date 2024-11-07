work=""
   
function addTask(){
    inp=document.getElementById('todo-input')
    p=document.getElementById("todo-list")

    if (inp.value === '') {
         alert('Please enter a task');
         return;
   }

   const li = document.createElement('li');
   li.innerHTML = `${inp.value} <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>`;
   li.addEventListener('click', function() {
          this.classList.toggle('completed');
   });
    

   p.appendChild(li);
   inp.value = '';
}


function deleteTodo(button) {
     const li = button.parentElement;
     li.remove();
}