const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const { authMiddleware } = require('./src/middleware/authMiddleware');

//Routes
const { authRouter } = require('./src/routing/authRouter');
const { userRouter } = require('./src/routing/userRouter');
const { gamesRouter } = require('./src/routing/gamesRouter');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/user', authMiddleware, userRouter);
app.use('/games', gamesRouter);

app.get('/', (req, res) => {
    res.send('Home page');
});

mongoose
    .connect('mongodb+srv://test_user:qwerty123@cluster0.2t5el.mongodb.net/steamDB?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Database connected');
        app.listen(5050);
    })
    .catch((err) => console.log(err));
