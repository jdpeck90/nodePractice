var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index', { title: 'Welcome' });
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.post('/contact/send', function(req, res){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            user: 'jdpeck90@gmail.com',
            pass: ''
        }
        mailOptions = {
            from: 'Justin Peck <jdpeck90@gmail.com>',
             to: 'jdpeck90@gmail.com',
             subject: 'Website Submission',
             message:  req.body.name + req.body.name = "test"
              
        }
    })
})

app.listen(3000);

console.log('server is running on port 3000...');
