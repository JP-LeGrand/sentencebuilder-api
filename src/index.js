import express from "express";

//Creates an express application
const app = express();

app.get("/", function (req, res) {
  res.send("Sentence builder api");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
