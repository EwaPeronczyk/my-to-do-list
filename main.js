const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const addInput = document.querySelector('input.add');
const searchInput = document.querySelector('input.search');
const liElements = document.querySelectorAll('li');


const removeTask = (e) => {
	// e.target.parentNode.remove();
	const index = e.target.parentNode.dataset.key;
	toDoList.splice(index, 1);
	taskNumber.textContent = listItems.length;
	renderList()
}
const addTask = (e) => {
	e.preventDefault();
	const taskName = addInput.value;
	if (taskName === "") return;
	const task = document.createElement('li');
	task.className = 'task';
	task.innerHTML = taskName + "<button>usuń</button>";
	toDoList.push(task);
	renderList()
	ul.appendChild(task);
	addInput.value = "";
	taskNumber.textContent = listItems.length;
	task.querySelector('button').addEventListener('click', removeTask);
}

const searchTask = (e) => {
	const searchText = e.target.value.toLowerCase();
	let tasks = [...listItems];
	console.log(tasks);
	tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
	ul.textContent = "";
	tasks.forEach(li => ul.appendChild(li));
	taskNumber.textContent = listItems.length;
	// const clearSearch = searchInput.value;
	// if (clearSearch === "") return;  pomyśleć nad tym 
}

const renderList = () => {
	ul.textContent = '';
	toDoList.forEach((toDoElement, key) => {
		toDoElement.dataset.key = key;
		ul.appendChild(toDoElement)
	})
}
form.addEventListener('submit', addTask)
searchInput.addEventListener('input', searchTask)