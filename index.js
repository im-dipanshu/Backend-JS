require('dotenv').config()
const express = require("express")
const app = express()
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/setup',(req,res)=>{
    res.send('<h1>Getting It</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})