var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI");
//var MeaningCloud = require("meaning-cloud");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const fetch = require("node-fetch");
dotenv.config();

const app = express();
app.use(express.static("dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// You could call it aylienapi, or anything else ------ > using "meanigcloud"
// Using the same technique like "project3" to call API key
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
const application_key = process.env.API_KEY;

console.log(`Your API key is ${process.env.API_KEY}`);
console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile('dist/index.html');
  //res.sendFile(path.resolve("src/client/views/index.html"));
});
const port = 8081;
// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});

/* POST route using to fetch "Using the same technique like "Project 3"*/
// Function to GET Web API Data
app.post("/route", async (req, res) => {
  const Api_url = `${baseUrl}?key=${application_key}&lang=en&url=${req.body.formText}`;  try {
    const response = await fetch(Api_url);
    const data = await response.json();
    res.send(data);
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});


//console.log(JSON.stringify(mockAPIResponse));
