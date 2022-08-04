const express = require ('express')
const dayjs = require ('dayjs')
const app = express()

app.use((req,res,next)=>{
    console.log(`new visitor : come from ${req.hostname} | request page ${req.path}`)
    next()
})

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', 'page')
app.get('/', (req,res)=>{
    let articles = [
        {title : 'how to use Node JS', author : 'ho yin'},
        {title : 'diff between node js and PHP', author : 'June'},
        {title : 'relation between NPM and Node JS', author : 'ann'},
    ]
    let now = `now is ${dayjs().hour()} hour ${dayjs().minute()} minute`
    res.render('index', {courseName : 'NodeJs begin'
    , time : now
    , blogs : articles})
})

app.get('/aboutus', (req,res)=>{
    res.redirect('about')
})

app.post('/',(req,res)=>{
    console.log(req.body)
    console.log(req.body.username)
    console.log(req.body.password)
    res.render('reply', {courseName : 'Reply'
    , username : req.body.username
    , password : req.body.password})
})

app.get('/about', (req,res)=>{
    res.render('about', {courseName : 'About'})
})

app.use((req,res)=>{
    res.status(404).render('404', {courseName : '404 - not found'})
})

app.listen(3000)