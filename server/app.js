const express = require('express')
const app = express()
const PORT = 5000

const customMidlleware = (req,res,next)=>{
    console.log("middleware executed!!")
    next()
}

app.use(customMidlleware)

app.get('/',(req,res)=>{
    console.log("home")
    res.send("Home Page")   
})

app.get('/about',customMidlleware,(req,res)=>{
    console.log("about")
    res.send("about page")   
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})