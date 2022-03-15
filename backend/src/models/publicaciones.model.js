import mongoose from "mongoose";

const publicacionSchema = new mongoose.Schema(
  {
    estado: {
      type: mongoose.Schema.Types.String,
    },
    descripcion: {
      type: mongoose.Schema.Types.String,
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
