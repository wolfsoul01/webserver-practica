import http from 'http';
import fs from 'fs'

const html=fs.readFileSync('./index.html',{encoding:"utf8"})

const server = http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'html'});

    res.write(html);
    res.end()
})

const PORT= 8080;
server.listen(PORT);
console.log('Server listo en el http://localhost:8080/');


