import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  name: String,
  imgURL: String,
  address: {
    street: String,
    city: String
  },
  hours: {
    open: { type: Number, min: 0, max: 23 },
    close: { type: Number, min: 0, max: 23 }
  },
  price: { type: Number, min: 1, max: 5 },
  outlets: Boolean,
  atmosphere: String
});

const Location = mongoose.model("Location", locationSchema);

export default Location;
