// alert("Hello!")


window.addEventListener('load',()=>{
  const from = document.querySelector('#new-task-from');
  const input =document.querySelector('#new-task-input');
  const list_el =document.querySelector('#tasks');

  // console.log(from);
  from.addEventListener('submit',(e) => {
    e.preventDefault();
    const task =input.value;

    if(!task){
    alert("please fill out the task");
    // return;
    }


    const task_el =document.createElement("div");
    task_el.classList.add("task");

    const task_content_el=document.createElement("div");
    task_content_el.classList.add("content");


    task_el.appendChild(task_content_el);

    const task_input_el =document.createElement('input');
    task_input_el.classList.add("text");
    task_input_el.type="text";
    task_input_el.value=task;
    task_input_el.setAttribute('readonly','readonly');
    task_content_el.appendChild(task_input_el);
    
    //יצרנו דיב 
   const task_actions_el =document.createElement("div");
   //  class actions הוספנו  
   task_actions_el.classList.add("actions");
   // creat button edit
   const task_edit_el =document.createElement("button");
   //add class
   task_edit_el.classList.add("edit");
   // creat in html 
   task_edit_el.innerHTML ="Edit";

   const task_delete_el =document.createElement("button");

   task_delete_el.classList.add("delete");
   
   task_delete_el.innerHTML="DELETE";

   task_actions_el.appendChild(task_edit_el);
   task_actions_el.appendChild(task_delete_el);
   task_el.appendChild(task_actions_el);


  list_el.appendChild(task_el);
  input.value="";
//The focus() method gives focus to an element (if it can be focused).
  task_edit_el.addEventListener('click',() => {
    //The toLowerCase() method converts a string to lowercase letters
   if(task_edit_el.innerText.toLowerCase()== 'edit'){

    task_input_el.removeAttribute("readonly");
    task_input_el.focus();
    task_edit_el.innerHTML ="save";
   } 
   else{
    task_input_el.setAttribute('readonly',"readonly");
    task_edit_el.innerHTML="Edit";
   }
  })

  task_delete_el.addEventListener('click', () =>{
    list_el.removeChild(task_el);
 })
  })

})