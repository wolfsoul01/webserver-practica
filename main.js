const express = require('express');
const  hbs = require('hbs');
require('dotenv').config();

const app = express();
const PORT=process.env.PORT;



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials',  (err)=> {
    console.log(err);
});

app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'WolfSoul',
        titulo:'Curso Node '
    })
});
app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre:'WolfSoul',
        titulo:'Curso Node '
    })
});
app.get('/elements',(req,res)=>{
    res.render('elements',{
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