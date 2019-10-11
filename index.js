const express = require("express");
const config = require('./config.js');
const { getDocument, getDocuments } = require('./resolvers/getData');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/documents/:databaseId/:collectionId', function (req, res) {
    getDocuments(req.params.databaseId, req.params.collectionId).then(response => {
        res.send(response);
    });
});

app.get('/document/:databaseId/:collectionId/:id', function (req, res) {
    getDocument(req.params.databaseId, req.params.collectionId, req.params.id).then(response => {
        res.send(response);
    });
});

app.listen(config.PORT, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});