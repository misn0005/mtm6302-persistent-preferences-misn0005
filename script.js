const themeSelect = document.getElementById('theme-select');
const listStyleSelect = document.getElementById('list-style-select');
const myList = document.getElementById('myList');

const items = ['Red', 'Blue', 'Green', 'Orange', 'Purple'];

const theme = localStorage.getItem('theme') || 'light';
const listStyle = localStorage.getItem('listStyle') || 'circle';

setTheme(theme);
setListStyle(listStyle);

themeSelect.addEventListener('change', (event) => {
	const newTheme = event.target.value;
	setTheme(newTheme);
	localStorage.setItem('theme', newTheme);
});

listStyleSelect.addEventListener('change', (event) => {
	const newListStyle = event.target.value;
	setListStyle(newListStyle);
	localStorage.setItem('listStyle', newListStyle);
});

items.forEach((item) => {
	const li = document.createElement('li');
	li.textContent = item;
	myList.appendChild(li);
});

function setTheme(theme) {
	document.body.classList.remove('light', 'dark', 'grey');
	document.body.classList.add(theme);
}

function setListStyle(listStyle) {
	myList.style.listStyleType = listStyle;
}
