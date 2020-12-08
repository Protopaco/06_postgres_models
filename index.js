// require('dotenv').config();
const express = require('express');
const { builtinModules } = require('module');
const app = express();
const Dogs = require('./lib/models/dogs.js')
app.use(express.json());



app.get('/test', async (req, res) => {
    try {
        res.status(200).json({ greeting: 'HELLO POSTMAN!' })
    } catch (e) {
        res.status(500).text(e.message)
    }
})

app.post('/insert', async (req, res) => {
    try {
        res.status(200).send(await Dogs.insert(req.body))
    } catch (e) {
        res.send(e.message)
    }
})

app.get('/find', async (req, res) => {
    try {
        res.status(200).send(await Dogs.find())
    } catch (e) {
        res.send(e.message);
    }
})

app.get('/find/:id', async (req, res) => {
    try {
        res.status(200).send(await Dogs.findById(req.params.id))
    } catch (e) {
        res.send(e.message);
    }
})

app.put('/update/:id', async (req, res) => {
    try {
        res.status(200).send(await Dogs.update(req.params.id, req.body))
    } catch (e) {
        res.send(e.message);
    }
})


module.exports = app;