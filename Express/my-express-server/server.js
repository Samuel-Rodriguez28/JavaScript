import express from 'express';

var app = express();

app.get("/", function(req, res){
    res.send("Hello World! XD");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});