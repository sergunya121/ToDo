var date = new Date();
var tasks = document.querySelector('.tasks');
var inputName = document.querySelector('.input-name');
var month = document.querySelector('.month');
var dayOfWeek = document.querySelector('.day-of-week');
var dayOfMonth = document.querySelector('.day-of-month');
// export let header = document.querySelector('.header');

dayOfMonth.innerHTML = date.getDate();
//Write a day of week
switch (date.getDay()) {
case 0: dayOfWeek.innerHTML = 'Sunday';
break;
case 1: dayOfWeek.innerHTML = 'Monday';
break;
case 2: dayOfWeek.innerHTML = 'Tuesday';
break;
case 3: dayOfWeek.innerHTML = 'Wednesday';
break;
case 4: dayOfWeek.innerHTML = 'Thursday';
break;
case 5: dayOfWeek.innerHTML = 'Friday';
break;
case 6: dayOfWeek.innerHTML = 'Saturday';
break;
};
//Write a month
switch (date.getMonth()) {
case 0: month.innerHTML = 'January';
break;
case 1: month.innerHTML = 'February';
break;
case 2: month.innerHTML = 'March';
break;
case 3: month.innerHTML = 'April';
break;
case 4: month.innerHTML = 'May';
break;
case 5: month.innerHTML = 'June';
break;
case 6: month.innerHTML = 'July';
break;
case 7: month.innerHTML = 'August';
break;
case 8: month.innerHTML = 'September';
break;
case 9: month.innerHTML = 'October';
break;
case 10: month.innerHTML = 'November';
break;
case 11: month.innerHTML = 'December';
break;
};
//Burger-menu
function burgerMenu() {
var hamburger = {
navToggle: document.querySelector('.nav-toggle'),
nav: document.querySelector('nav'),
doToggle: function(){
this.navToggle.classList.toggle('expanded');
this.nav.classList.toggle('expanded');
}};
hamburger.navToggle.addEventListener('click', function() { hamburger.doToggle(); });
hamburger.nav.addEventListener('click', function() { hamburger.doToggle(); });
};
function addTask(){
    var taskName = inputName.value;
    var task = document.createElement('div');
    task.setAttribute('class', 'task');
    // <input type='checkbox' id='checkbox'><input id='task-text' value="${taskName}" disabled>
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', 'checkbox');
    var taskText = document.createElement('input');
    taskText.setAttribute('id', 'task-text');
    taskText.setAttribute('value', taskName);
    taskText.disabled = true;
    var icon = document.createElement('div');
    icon.setAttribute('class', 'icons');
    tasks.appendChild(task);
    task.append(check, taskText, icon)
    inputName.value = "";
    var editBtn = document.createElement('div');
    editBtn.setAttribute('class', 'fa fa-pencil');
    var trash = document.createElement("div");
    trash.setAttribute('class', 'fa fa-trash-o');
    icon.append(editBtn, trash);
    //Edit task
    editBtn.onclick = function editTask(){
        let input = document.getElementById('task-text');
        input.disabled = false;
        var saveBtn = document.createElement("div");
        saveBtn.setAttribute("class", "fa fa-thumbs-o-up");
        icon.replaceChild(saveBtn, editBtn);
        //Save changes
        saveBtn.onclick = function saveTask(){
            input.disabled = true;
            icon.replaceChild(editBtn, saveBtn);
        };};
    deleteTask(trash);
};
function deleteTask(element){
    element.addEventListener("click", (event) => {
    element.parentElement.parentElement.remove();
    });
};
burgerMenu();