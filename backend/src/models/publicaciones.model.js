import mongoose from "mongoose";

const publicacionSchema = new mongoose.Schema(
  {
    estado: {
      type: mongoose.Schema.Types.Boolean,
    },
    descripcion: {
      type: mongoose.Schema.Types.String,
    },
    fechaAprox: {
      type: mongoose.Schema.Types.String,
    },
    lugar: {
      type: mongoose.Schema.Types.String,
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
