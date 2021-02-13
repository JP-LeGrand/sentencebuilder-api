import mongoose from "mongoose";
const { Schema, model } = mongoose;

//Define sentence schema
const sentenceSchema = new Schema({
  dateTime: Number,
  sentence: String,
});

export const sentence = () => {
  model("Sentence", sentenceSchema);
};
