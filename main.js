const express = require('express');
const  hbs = require('hbs');
require('dotenv').config();

//Express y port 
const app = express();
const PORT=process.env.PORT;


// Handlebars
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


app.get('*',(req,res)=>{
    res.write("404 | Page not found ");
});


app.listen(PORT,()=>{
    console.log("Server listo en el localhost:",PORT);
});