const http = require ('http')
const fs = require('fs')
const dayjs = require('dayjs')

console.log(dayjs().year())
console.log(dayjs().month())
console.log(dayjs().date())

console.log(dayjs().hour())
console.log(dayjs().minute())
console.log(dayjs().second())

const server = http.createServer ((req, res)=> {

    let path = './page/'
    switch(req.url)
    {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/test.js':
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/aboutme':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }
    res.setHeader('Content-type', 'text/html')
    //res.write('<h1>hello</h1>')
    fs.readFile(path,(error,data)=>{
        if (error)
            console.log(error)
        else
            res.write(data)
            res.end()
    })

    

})

server.listen(3000, 'localhost', ()=>{
    console.log ('server is listening at port 3000')
})