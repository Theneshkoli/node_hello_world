//Proj 1 - Hello World in node
// console.log('Hello World');

//Proj 2 - Hello World in express
// const express = require('express');

// const app = express();

// app.get('/', function(req, res){
//     res.send('Hello World');
// });

// app.listen(3000, function(){
//     console.log('App started at post 3000...');
// });

//Proj 2 - Hello World in express using pug view engine
const express   = require('express');
const path      = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('index', {
        title: 'Hello World'
    });
});

app.get('/blog/add', function(req, res){
    let blogs = [
        {
            id: 1,
            heading: 'Heading One',
            description: 'Description One'
        },
        {
            id: 2,
            heading: 'Heading Two',
            description: 'Description Two'
        },
        {
            id: 3,
            heading: 'Heading Three',
            description: 'Description Three'
        }
    ];
    res.render('add_blog', {
        title: 'Add New Blog',
        blogs: blogs
    });
});

app.listen(3000, function(){
    console.log('App started at post 3000...');
});