const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, function(){
    console.log(`Express rodando na porta ${PORT}`)
})

//body parser
app.use(bodyParser.urlencoded({extended: false}))

//handle bars
app.set('views', path.join(__dirname, 'views')) 
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('veiw engine', 'handlebars')

//static folder
app.use(express.static(path.join(__dirname, 'public')))

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
    res.render('index.handlebars')
})

//jobs routes
app.use('/jobs', require('./routes/jobs'))