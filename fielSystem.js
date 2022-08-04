const fs = require('fs')

/* fs.writeFile('./demo.txt', 'NodeJS, hello filesystem', ()=> {
    console.log('finished')
}) */

/* fs.readFile('./demo.txt', (error, data)=>{
    if(error)
        console.log(error)

    console.log(data.toString())
}) */

if(!fs.existsSync('./image')) {
    fs.mkdir('./image', (error)=>{
        if(error)
            console.log(error)
        else
            console.log('folder has been created')
    })
}

if(fs.existsSync('./delete.txt')) {
    fs.unlink('./delete.txt', (error)=>{
        if(error)
            console.log(error)
        else
            console.log('file is deleted')
    })
}