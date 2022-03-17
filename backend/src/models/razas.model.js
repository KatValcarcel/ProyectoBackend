import mongoose from "mongoose";

const razaSchema = new mongoose.Schema({
  nombreRaza: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const Raza = mongoose.model("raza", razaSchema);
