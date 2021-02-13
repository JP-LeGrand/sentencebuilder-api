import mongoose from "mongoose";
const { Schema, model } = mongoose;

//Define word schema
const wordSchema = new Schema({
  word: String,
  type: String,
});

export const word = () => {
  model("Word", wordSchema);
};
