const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
    console.log('a user connected');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

http.listen(3000, () => {
    console.log('listening on *:3000');
});

