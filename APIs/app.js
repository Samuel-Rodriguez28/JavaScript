const express = require('express');
const https = require("https");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res){
    const city = req.body.cityName;

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7737bb7fcdea16e7d17848d2dc50dfce&units=metric";

    https.get(url, function(response){
        switch(response.statusCode){
            case 404:
                res.write("<h1>ERROR 404</h1>");
                res.write("<h2>The city you're looking for does not exist</h2>")
                break;

            default:
                response.on('data', function(data){
                const weatherData = JSON.parse(data);
                    
                const temp = weatherData.main.temp;
                const desc = weatherData.weather[0].description;
                const icon = weatherData.weather[0].icon;
                const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
                    
                res.write("<h1>Temperature in "+city+" is "+ temp + " degrees Celsius</h1>");
                res.write("<h2>The weather is currently " + desc + "</h2>");
                res.write("<img src=" + iconUrl + ">");        
                res.send();
                });
                break;
        }
    });
});

app.listen(3000, function(){
    console.log('Express server listening in port 3000');
});

/* const url = "https://api.openweathermap.org/data/2.5/weather?q=Saltillo&appid=7737bb7fcdea16e7d17848d2dc50dfce&units=metric";
https.get(url, function(response){
    res.sendFile
    console.log(response.statusCode);

    
    response.on('data', function(data){
    const weatherData = JSON.parse(data);

    const temp = weatherData.main.temp;
    const desc = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

    res.write("<h1>Temperature in Saltillo is "+ temp + " degrees Celsius</h1>");
    res.write("<h2>The weather is currently " + desc + "</h2>");
    res.write("<img src=" + iconUrl + ">");        
    res.send();
    });
}); */
