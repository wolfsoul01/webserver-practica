import express from 'express';

const app = express();
const PORT=8080;
app.get('/',(req,res)=>{

    res.send('Hola mundo desde express');
});

app.get('/api',(req,res)=>{
    res.send('Aqui va la api perro ');
})

app.get('*',(req,res)=>{
    res.send('404 | Page not Found ;')
})


app.listen(PORT,()=>{
    console.log("Server listo en el localhost:",PORT);
})
