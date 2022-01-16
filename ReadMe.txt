Bonjour!

I am gonna build a REST api using node and mongo. The things I learnt along the way will be recorded here. Strap In!

======================================
npm init = installs package.json

======================================
npm install express nodemon = express(backend framework for nodejs ,helps in building APIs and web applications)
			      nodemon(helps restarting the node appwhenever changes in directory is detected)

======================================
go to package.json and in scripts put:

"scripts": {
    "start": "nodemon app.js"
  },

here app.js is the file where execution starts

======================================
create app.js and then create a very basic route. How to do that?

get express:
const express = require('express');

start express:
const app = express();

now app has the power to listen to the server. So at the bottom of the page :
app.listen(3000);

now above listen, create a basic ass route which prints a msg in /:
app.get('/', (req,res) => {

	res.send('we are in home page');

});

Here GET gives us the msg, POST sends the msg , PATCH updates the code, DELETE deletes the code

======================================
Now create MiddleWares. Middlewares execute functions when it hits a particular Route.Middlewares need to be above routes. Example:

app.use('/',() =>{

	console.log("this is a middleware");
});

When we go to / in terminal we get this is a middleware. Middleware are imp for authentication

======================================
now that we know how to create middlewares lets delete that and try to connect to mongodb

npm install mongoose

 In cloud.mongodb.com create cluster (i did by rubbercutter email)

cluster name = Cluster0
Username = user1 
Pwd = user1
conn string = mongodb+srv://user1:<password>@cluster0.a8p0u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

npm install dotenv  

dotenv = automatically loads environment variables from a . env file // Helps us to hide the pwds when we push the code


11:47 = the code continues

.env will have the parameters hidden















