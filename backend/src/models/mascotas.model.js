import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({
  contactName: {
    type: mongoose.Schema.Types.String,
    alias: "nombre",
    required: true,
    nested: {
      firstName: { type: String },
      lastName: { type: String },
    },
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: mongoose.Schema.Types.String,
    alias: "phone",
    required: true,
    unique: true,
    maxLength: 9,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});
