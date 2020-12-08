const express = require('express');
const app = express();
const posts = require('./routes/posts');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizdata');
const db = mongoose.connection;


// Check for DB connection
db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});

app.use('/posts', posts);

// Route for home
app.get('/', function (req, res) {
    res.send('Quiz App Home Page')
});

// Start server with port 3000
app.listen(3000, function(){
    console.log("Server started on localhost:3000");
});