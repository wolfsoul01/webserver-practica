import express from 'express';

const app = express();
const PORT=8080;
app.get('/',(req,res)=>{

    res.send('Hola mundo desde express')
})

app.listen(PORT,()=>{
    console.log("Server listo en el localhost:",PORT);
})
