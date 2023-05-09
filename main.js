const express = require('express');
const app = express();
const PORT=8080;

app.set('view engine', 'hbs');

app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'WolfSoul',
        titulo:'Curso Node '
    })
});
app.get('/elements',(req,res)=>{
    res.sendFile(__dirname+'/public/elements.html');
});

app.get('/generic',(req,res)=>{
    res.sendFile(__dirname+'/public/generic.html');
});

app.get('*',(req,res)=>{
    res.sendFile(  __dirname+'/public/404.html');
});


app.listen(PORT,()=>{
    console.log("Server listo en el localhost:",PORT);
});