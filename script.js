const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");


taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = taskInput.value;
    console.log(taskTitle);
    

    if (taskTitle =="") {
        alert("Please Enter Task");         
    }
    else{
    const listItem = document.createElement("li");
    listItem.innerHTML = taskTitle;
    let span = document.createElement('span');
    span.innerHTML=`&times;`
    listItem.appendChild(span);
    taskList.append(listItem);
    taskInput.value = "";
    saveListData();

}
});

taskList.addEventListener("click", (e)=> {
    if (e.target.tagName =="LI") {
        e.target.classList.toggle("checked");
        saveListData();
    }
    if (e.target.tagName =="SPAN") {
        const li = e.target.parentElement; 
        li.remove();
        saveListData();
    }

});

taskList.addEventListener("click", function() {
   listItem.contentEditable =true;
})


function ShowListData(){
    taskList.innerHTML = localStorage.getItem("listItem"); 
}

function saveListData(){
    localStorage.setItem('listItem',taskList.innerHTML);
}

ShowListData();





