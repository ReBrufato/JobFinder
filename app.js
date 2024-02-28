const express = require('express')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, function(){
    console.log(`Express rodando na porta ${PORT}`)
})

//body parser
app.use(bodyParser.urlencoded({extended: false}))

//db connnection
db
    .authenticate()
    .then(()=>{
        console.log("Conectado ao banco...")
    }) 
    .catch(error => {
        console.log("Erro ao se conectar com o banco", error)
    })
    
//route home
app.get('/',(req,res) =>{
    res.send("Está funcionando")
})
