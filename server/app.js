var express = require('express');
//var path = require('path');
//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
//var routes = require('./routes');


var app = express();

app.set('views', path.join(__dirname, '../client/index'));
app.set('view engine', 'html');

// Connect to DB
//mongoose.connect('mongodb://localhost/exercices');

// Add middleware body parser
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({
//    extended: true
//}));

// Share public folder
app.use(express.static(path.join(__dirname, '../client'))); 

/** Routes */
app.get('/', routes.index);

// Exercises Routes
app.get('/test', function() {console.log("a") ;});
//app.post('/insertExercice', routes.insertExercice);
//app.delete('/deleteExercise/:id', routes.deleteExercise);
//app.put('/editExercice', routes.editExercise);

// Categories Routes
//app.get('/fetchAllCategories', routes.fetchAllCategories);
//app.post('/insertCategory', routes.insertCategory);
//app.delete('/deleteCategory/:id', routes.deleteCategory);


// Start Server
//app.set('port', process.env.PORT || 3000);

//var server = app.listen(app.get('port'), function() {
//    console.log('Server started on port ' + server.address().port);
//});