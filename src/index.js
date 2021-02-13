// Compile model from schema
require("./model/sentence.js");
require("./model/word.js");
const express = require("express");
const sentenceRoute = require("./routes/sentenceRoute.js");
const wordRoute = require("./routes/wordRoute.js");
const mongoose = require("mongoose");
const { connect, connection } = mongoose;
const { json } = require("body-parser");

//Creates an express application
const app = express();
app.use(json());
app.use("/sentence", sentenceRoute);
app.use("/word", wordRoute);

const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0.fe0mt.mongodb.net/SentenceBuilder?retryWrites=true&w=majority";
connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

//Checks our connections is successful to mongo instanceF
connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", function (req, res) {
  res.send("Sentence builder api");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
