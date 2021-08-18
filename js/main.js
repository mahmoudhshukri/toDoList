// setting up var
let theInput = document.getElementById('input'),
    theAddBtn = document.getElementById('plus'),
    tasksContainer = document.getElementById('tasksContent'),
    noTasksMsg = document.getElementById('no-msg'),
    tasksCount = document.querySelector('.tasks-count span'),
    tasksCompleted = document.querySelector('.tasks-completed span');
// focus on input field
window.onload = function(){
    theInput.focus();
};
// adding the task
theAddBtn.onclick = function(){
    // check if the input empty
    if(theInput.value === ''){
        
    }
    else{
        let noTasksMsg = document.getElementById('no-msg');
        // check if span no msg is exist
        if(document.body.contains(document.getElementById('no-msg'))){
            // remove no tasks message
            noTasksMsg.remove();
        }
        // create span element
        let mainSpan = document.createElement('span');
        // create delete btn
        let deleteElement = document.createElement('span');
        // create text to span
        let text = document.createTextNode(theInput.value);
        // create text to delete btn
        let deleteText = document.createTextNode('Delete');
        // add text to span
        mainSpan.appendChild(text);
        // add class to span
        mainSpan.className = 'task-box';
        // add text to delete btn
        deleteElement.appendChild(deleteText);
        // add class to delete btn
        deleteElement.className = 'delete';
        // add delete btn to main span
        mainSpan.appendChild(deleteElement);
        // add task to the container
        tasksContainer.appendChild(mainSpan);
        // local storge
        
        // empty the input
        theInput.value = "";
        // focus on input
        theInput.focus();
        // clac tasks
        clacTasks();
    }
}
document.addEventListener('click' ,function(e){
    // delete task
    if(e.target.className == 'delete'){
        // remove current task
        e.target.parentNode.remove();
        // check number of tasks
        if(tasksContainer.childElementCount == 0){
            createNoTasks();
        }
    }
    // finish task
    if(e.target.classList.contains('task-box')){
        // toggle class finished
        e.target.classList.toggle('finished');
    }
    // clac tasks
    clacTasks();    
});
// function to create no tasks message
function createNoTasks(){
    // create massage span element
    let msgSpan = document.createElement("span");
    // create the text message
    let msgText = document.createTextNode('No Tasks To Show');
    // add text to message span element
    msgSpan.appendChild(msgText);
    // add class to message span 
    msgSpan.id = 'no-msg';
    // append msgSpan 
    tasksContainer.appendChild(msgSpan);
}
// function to calc task
function clacTasks(){
    // calc all tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
    // clac completed tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}