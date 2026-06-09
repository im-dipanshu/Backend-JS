const express=require('express')


const app=express()
app.use(express.json())

const notes=[]

app.get('/', (req, res) => {
    res.send('Welcome to Notes API');
});

app.post('/notes',(req,res)=>{
    console.log(req.body)
})

module.exports=app