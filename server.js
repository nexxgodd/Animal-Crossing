const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const local_url = "http://localhost:4200/";
const jjz_heroku = "https://jjz-animal-crossing.herokuapp.com/";
const toddy_heroku = "";

app.use(cors({
  origin : local_url, jjz_heroku, toddy_heroku
}));

mongo_url = "mongodb+srv://user:p0tat0e@animalcrossingline.5id29.mongodb.net/ac";



const fishSchema = new mongoose.Schema({
	id: Number,
	name: String,
	price: Number,
	location: String,
	size: String,
	time: String,
	timeArray: [],
	months: [],
});

const Fish = mongoose.model("Fish", fishSchema);

mongoose.connect(mongo_url).catch(function (reason) {
  console.log('Unable to connect to the mongodb instance. Error: ', reason);
});


app.get("/api", (req, res) => {
  Fish.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
      // res.json("hello world");
    }
  });
});



app.use(express.static(__dirname + '/dist/animal-crossing'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +
    '/dist/animal-crossing/index.html'));
});


app.listen(process.env.PORT || 3000, ()=>{
  console.log("service is on" );
});