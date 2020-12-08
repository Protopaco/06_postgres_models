// require('dotenv').config();

const express = require('express');
const { builtinModules } = require('module');
const app = express();
app.use(express.json());



app.get('/test', async (req, res) => {
    try {
        res.send({ greeting: 'HELLO POSTMAN!' })
    } catch (e) {
        res.send(e.message)
    }
})



module.exports = app;