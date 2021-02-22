const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const json = require('express-json');
const cors = require('cors')
const app = express()
const port = 3030

//DB

const DB = require('./controllers/key').MongoURI
mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('vous êtes connectés sur db');
})





//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//ROUTER
const indexRouter = require('./routers/index')
app.use('/', indexRouter)

app.listen(port, (req, res) =>{
    console.log('le port marche sur: ', port)
})
