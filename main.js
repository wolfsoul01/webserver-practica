const express = require('express');
const app = express();
const PORT=8080;

app.use(express.static('public'));


app.get('/api',(req,res)=>{
    res.send('Aqui va la api perro ');
})

app.get('*',(req,res)=>{
    res.sendFile(  __dirname+'/public/404.html');
})


app.listen(PORT,()=>{
    console.log("Server listo en el localhost:",PORT);
})