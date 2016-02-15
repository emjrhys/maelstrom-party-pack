var express = require('express');
var app = express();
var fs = require('fs');
var data = JSON.parse(fs.readFileSync('public/assets/phrases.json', 'utf8'));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/play', function(req, res) {
    res.render('pages/play');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


