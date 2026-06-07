//requiring express
const express=require('express')
//creating server
const app = express()
//Ports of '/' and '/about' with localhost
app.get('/',(req,res)=>{
    res.send('Hello World!')
})
app.get('/about',(req,res)=>{
    res.send('About Page')
})
//port 
app.listen(4000)