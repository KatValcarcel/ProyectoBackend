import mongoose from "mongoose";

const contactoSchema = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.Types.String,
    required: true,
    // nested: {
    //   firstName: { type: String },
    //   lastName: { type: String },
    // },
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  telefono: {
    type: mongoose.Schema.Types.String,
    required: true,
    // unique: true,
    maxLength: 9,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const Contacto = mongoose.model("contacto", contactoSchema);
