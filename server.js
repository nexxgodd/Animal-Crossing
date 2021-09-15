const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

app.use(cors({
  origin: "https://jjz-animal-crossing.herokuapp.com"
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


app.listen(process.env.PORT || 8080, ()=>{
  console.log("service is on" );
});