// TODO: write code here

const subscribeWidget = document.querySelector('[data-widget=subscribe]');
const subscribeForm = subscribeWidget.querySelector('[data-id=subscribe-form]');
const nameInput = subscribeWidget.querySelector('[data-id=name]');
const phoneInput = subscribeWidget.querySelector('[data-id=phone]');

// POST (slide 38)
subscribeForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const params = Array.from(subscribeForm.elements)
		.filter(({name}) => name)
		.map(({name, value}) => `${name}=${encodeURIComponent(value)}`)
		.join('&');
	const url = 'http://localhost:7070';
	const xhr = new XMLHttpRequest();
	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	// event listener here
	xhr.send(params);
});
