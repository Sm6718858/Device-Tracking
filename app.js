import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', (socket) => {
    const username = socket.handshake.query.username || "Anonymous";
    socket.username = username;
    console.log('user connected:', socket.username);
    socket.on('send-location',function(data){
        io.emit('receive-location',{id:socket.id,username:socket.username,...data})
    })
    socket.on('disconnect', () => {
        io.emit('user-disconnected',{id:socket.id,username:socket.username})
        console.log('user disconnected:', socket.username);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
