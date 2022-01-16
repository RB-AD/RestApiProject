const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//import Routes
const postsRoute = require('./Routes/posts');

app.use('/posts',postsRoute);





//ROUTES 
app.get('/', (req,res) => {

    res.send('We are on home');

});


//connect to db
mongoose.connect(
        process.env.DB_CONNECTION, 
        { useNewUrlParser : true},
        () => console.log('connected to DB')
        
);



//this is how to start listening to the server
app.listen(3000);