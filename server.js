const express = require('express')
var cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 8080
app.use(cors())

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



// mongoose.connect('mongodb://localhost:27017/questions', {useNewUrlParser: true});
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })


var User = require('./models/questionschema');


const questionsRouter = require('./routes/questions');
app.use('/', questionsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
