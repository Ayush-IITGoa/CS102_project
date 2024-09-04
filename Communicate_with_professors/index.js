const http = require("http")
const express = require("express");
const { Server } = require("socket.io")
const nodemailer = require("nodemailer")

const app = express()
const server = http.createServer(app);
const io = new Server(server);
var isFirstMessageRecieved = false

app.use(express.static(__dirname +"/public"));

app.get('/', (req, res)=>{
    return res.sendFile(__dirname +"/public/test.html")
})



server.listen(9000)

const users = {}

io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        users[socket.id] = name;
        console.log(users)
        socket.broadcast.emit('user-joined', users[socket.id])
    })

    socket.on('send', message =>{
        name = users[socket.id]
        socket.broadcast.emit('receive', {message: message, name: name})
        if (isFirstMessageRecieved == false) {
            sendEmailNotification(message,name);
            isFirstMessageRecieved = true
        }
    })

    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id]
    })
})

function sendEmailNotification(data, name){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harsh.dinesh.23031@iitgoa.ac.in',
            pass: 'sdkz gxss zija pfxz'
        }
    })

    
    const mailOptions = {
        from: 'harsh.dinesh.23031@iitgoa.ac.in',
        to: 'harshdbhoir21@gmail.com',
        subject: 'New Message Notification',
        text: `Someone sent the first message in the chatbox. Context-"${data}" From- "${name}"`
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Email notification error:', error);
        } else {
            console.log('Email notification sent:', info.response);
        }
    });
    
};
