const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt("Hello Jobseeker! What is your name?")
appendMessage('Thanks for joining!');
socket.emit('new user', name)


socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`)
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
    appendMessage(`You: ${data.message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageContainer.append(messageElement)
}