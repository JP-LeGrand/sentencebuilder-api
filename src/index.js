import { sentence } from "./model/sentence.js";
import { word } from "./model/word.js";
import express from "express";

// Compile model from schema
sentence();
word();

//Creates an express application
const app = express();

app.get("/", function (req, res) {
  res.send("Sentence builder api");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
