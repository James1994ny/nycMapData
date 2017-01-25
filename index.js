var express = require('express'); //express is to help link express

var app = express();
app.set('view engine', 'ejs') //This is to link the html page to the sender
app.set('views', './views') //Make sure to create a views folder with the .ejs files in it
app.use(express.static(__dirname + '/public')); // References the CSS to the ejs files
var port = process.env.PORT || 3000;

app.get('/', function(req, res){      //Once node index.js is running. http://localhost:3000/ should return the page. hence the '/' which referres to just localhost:300 page
res.render('index')
  })

//renders the mapBoxIncome map and sets it to /mapBoxIncome
app.get('/mapBoxIncome', function(req, res){      //Once node index.js is running. http://localhost:3000/ should return the page. hence the '/' which referres to just localhost:300 page
res.render('mapBoxIncome')
    })

app.get('/boroMapBox', function(req, res){      //Once node index.js is running. http://localhost:3000/ should return the page. hence the '/' which referres to just localhost:300 page
res.render('boroMapBox')
        })


app.listen(port, function(){  //When you upload to heroku, set app.listen(port,function...  )
  console.log("Listening on port 3000")
})
