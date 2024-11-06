const express = require('express')
require('dotenv').config()
const app = express()
const port = 5000


app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Hello world </h1>')
})

app.get('/twitter',(req,res)=>{
    res.send('hello abhi')
})
app.listen(process.env.PORT,()=>{
    console.log("server is running")
})