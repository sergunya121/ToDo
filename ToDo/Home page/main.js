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
	tasks.insertAdjacentHTML("beforeEnd", `<div class='task'><input type='checkbox' id='checkbox'><input id='task-text' value="${taskName}" disabled><div class='icons'><div class='fa fa-pencil'></div><div class='fa fa-trash-o' onclick="deleteTask()"></div></div>`);
	inputName.value = "";
	var editBtn = document.querySelector('.fa-pencil');
	//Edit task
	editBtn.onclick = function editTask(){
	let input = document.getElementById('task-text');
	input.disabled = false;
	var saveBtn = document.createElement("div");
	saveBtn.setAttribute("class", "fa fa-thumbs-o-up");
	var icon = editBtn.parentNode;
	icon.replaceChild(saveBtn, editBtn);
	//Save changes
	saveBtn.onclick = function saveTask(){
		input.disabled = true;
		icon.replaceChild(editBtn, saveBtn);};};};
function deleteTask(){
	var trash = document.querySelector('.fa-trash-o');	
	var listItem = trash.parentNode.parentNode;
	var div = listItem.parentNode;
	div.removeChild(listItem);
};
burgerMenu();