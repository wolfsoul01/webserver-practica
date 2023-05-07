import http from 'http';


const server = http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'text/plain'});

    res.write('Hola mundo desde el server ');
    res.end()
})

const PORT= 8080;
server.listen(PORT);
console.log('Server listo en el localhost://8080');


