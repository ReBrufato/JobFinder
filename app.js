const express = require('express')
const app = express()
const db = require('./db/connection')

const PORT = 3000

app.listen(PORT, function(){
    console.log(`Express rodando na porta ${PORT}`)
})


//db connnection
db
    .authenticate()
    .then(()=>{
        console.log("Conectado ao banco...")
    }) 
    .catch(error => {
        console.log("Erro ao se conectar com o banco", error)
    })
    
//routes
app.get("/",(req,res) =>{
    res.send("Está funcionando 2")
})