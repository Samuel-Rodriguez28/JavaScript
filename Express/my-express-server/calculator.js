const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var bmi = weight / Math.pow(2, height);

    res.send("Your bmi is: " + bmi.toFixed(2));
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});