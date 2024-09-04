const socket = io()

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".chatbox")

const name = prompt("Enter your name to join....")
socket.emit('new-user-joined', name);

const append = (message , position)=>{
    const messageElement = document.createElement('div')
    messageElement.innerHTML = message
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const message = messageInput.value;
    append(`You: ${message}`, 'right')
    socket.emit('send', message)
    messageInput.value= ""
})
socket.on('user-joined', name =>{
    let prof_name = document.getElementById("name")
    let stat = document.getElementById("stat")
    let spot = document.getElementById("spot")
    prof_name.innerHTML = `${name}`
    stat.innerHTML = "Online"
    spot.style.backgroundColor = "#5fe25f"
    stat.style.color = "#5fe25f"
})

socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, 'left')
})

socket.on('left', name=>{
    let spot = document.getElementById("spot")
    let stat = document.getElementById("stat")
    spot.style.backgroundColor = "#869286"
    stat.innerHTML = "Offline"
    stat.style.color = "#869286"
})