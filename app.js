const express = require('express');
const app = express();

const nunjucks = require("nunjucks");
const path = require("path")

//app.use('./public', express.static('public'));

app.use(express.static(path.join(__dirname, 'public')))

nunjucks.configure('views', {
    autoescape: true,
    express: app
});   

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.render('base.html');
})

app.listen(3500, ()=> {
    console.log('listening at 3500')
})


