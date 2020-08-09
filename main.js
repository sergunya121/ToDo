var tasks = document.querySelector('.tasks');
var input = document.querySelector('.input-name');

function burgerMenu() {
	var hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),
		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		}};
	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
	hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
};	
function deleteTask(){
	var trash = document.querySelector('.fa-trash-o');	
	var listItem = trash.parentNode.parentNode;
	var div = listItem.parentNode;
	div.removeChild(listItem)
};;
function addTask(){
	var taskName = input.value;
	tasks.insertAdjacentHTML("beforeEnd", `<div class='task'><input type='checkbox' id='checkbox'><label for='checkbox' class='task-name'><span id='task-text'>${taskName}</span></label><div class='icons'><div class='fa fa-pencil'></div><div class='fa fa-trash-o' onclick="deleteTask()"></div></div>`);
	input.value = "";
};
burgerMenu();