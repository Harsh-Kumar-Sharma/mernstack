const express = require('express');
const app = express();
const mongoose = require('mongoose')
const route =require('./routes/route')


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://harsh:7534981251@projectnode.rzqgdbx.mongodb.net/mini",
{useNewUrlParser: true})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)

app.listen(3000,()=>{console.log('sever is runing Mode')})
