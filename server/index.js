const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then(dbInstance => { app.set( 'db', dbInstance), console.log('DB Connected')})
.catch( (err)=>{console.log(err)});


app.post('/api/products',controller.create);

app.get('/api/products',controller.getAll);



const port = process.env.port || 8080;
app.listen(port, () => {console.log(`server is listening on port: ${port}`)});