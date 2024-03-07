const express = require('express')
const exphbs = require('express-handlebars') //objeto do handlebars
const app = express()
const path = require('path') //preciso dele para dizer ao handlebars o diretório onde estarão as views
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, function(){
    console.log(`Express rodando na porta ${PORT}`)
})

//body parser
app.use(bodyParser.urlencoded({extended: false}))

//handle bars
app.set('views', path.join(__dirname,'views')) 
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('veiw engine', 'handlebars')

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

//jobs routes
app.use('/jobs', require('./routes/jobs'))