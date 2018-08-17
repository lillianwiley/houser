require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const controller = require('./controller');

const {
    SERVER_P0RT,
    CONNECTION_STRING,
} = process.env;

const app = express();

app.use(express.static(__dirname+'/../build'));

app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
})
.catch(err => console.log(err));

app.get('/api/houses', controller.getHouses)
app.post('/api/houses/', controller.getHouses)
app.put('/api/houses/:id', controller.updateSomething)
app.delete('/api/houses/:id', controller.deleteSomething)

const PORT = 3025;
    app.listen(PORT, () => {
        console.log(`eavesdropping on port ${PORT}`);
    })