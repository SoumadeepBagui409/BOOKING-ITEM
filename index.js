const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
const name = ["Javier Freeman","Madalyn Levine","Rosemary Casey","Madalyn Levine","Oliver Kidd","Melissa Webster","Marvin Rodgers","Scarlet Dougherty","Scarlet Dougherty","Melissa Webster"];
const item = ["Car","Bus","Mobile","Laptop","Monitor","phone","Ipad","LED","Charger","Bottle"];
app.get('/',(req,res)=>{

    res.render("home",{name:name,item:item,multi:0});

})

app.get('/:page',(req,res)=>{
    const {page} = req.params;
    res.render('home',{name:name,item:item,multi:parseInt(page)});
})



app.listen(3000);