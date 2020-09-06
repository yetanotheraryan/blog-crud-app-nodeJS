const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./db/connection');
const articlerouter = require('./routes/articles');

const app = express();

connectDB();

app.set('view engine', 'ejs');


// .urlencoded(), helps accessing all the parameters from new articles forms, inside articles router, in (req.body.)
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res)=>{
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test decription'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test decription'
    },
    {
        title: 'Test Article 3',
        createdAt: new Date(),
        description: 'Test decription'
    }
    ];
    res.render('articles/index', {articles:articles});
})

// if this below is above urlencoder, we'll get an error, saying cant read title property of undefined
// meaning req.body == undefined
app.use('/articles',articlerouter);

app.listen(5000);
