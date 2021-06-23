const socket = io('http://localhost:3000');
var messages = document.getElementById('messages');
const messageForm = document.getElementById('messageForm')
const messageInput = document.getElementById('message-input')

const name = prompt("Hello Jobseeker! What is your name?")
appendMessage('Thanks for joining!');
socket.emit('new user', name)


socket.on('chat-message', data => {
    appendMessage(`x${data.name}: ${data.message}`)
})



socket.on('user-connected', name => {
    appendMessage(`${name} connected`)
})
socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value;
    // appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

// const messageElement = document.createElement('div')

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messages.append(messageElement)
}