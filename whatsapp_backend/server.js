// importing
// import express from 'express'; package.json에 "type" : "module"을 추가했는데안되네...
const express = require('express');
const mongoose = require('mongoose');
const Messages =require("./dbMessages.js");

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());

// DB config
const connection_url ='mongodb+srv://admin:boa457813@cluster0.oozha.mongodb.net/whatsappDB?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// ????


// api routes
app.get('/',(req,res) => res.status(200).send('Hello World'));

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})



// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));







