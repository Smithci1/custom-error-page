const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('public'))


// app.get('/',(request, response) => {
//     return response.send('index.html')
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname + '/public/index.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/public/404.html'));
    });
app.listen(1338)