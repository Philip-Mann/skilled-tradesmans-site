var socket = io();
      
const name = prompt("Hello Jobseeker! What is your name?")
appendMessage('Thanks for joining ' + name);
socket.emit('new user', name)

var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function (e) {
e.preventDefault();
if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
}
});

socket.on('chat message', function (msg) {
var item = document.createElement('li');
item.textContent = msg;
messages.appendChild(item);
window.scrollTo(0, document.body.scrollHeight);
});

function appendMessage(message) {
const messageElement = document.createElement('li')
messageElement.innerText = message;
messages.append(messageElement)
}