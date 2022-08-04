const http = require ('http')
const server = http.createServer ((req, res)=> {
    console.log('request received')

    // console.log(req)
    console.log(req.url)
    console.log(req.method)

    res.setHeader('Content-type', 'text/html')
    res.write('<meta charset="UTF-8">')
    res.write('<h1>hello</h1>')
    res.write('<h2>NodeJs中六</h2>')
    res.end()
})

server.listen(3000, 'localhost', ()=>{
    console.log ('server is listening at port 3000')
})