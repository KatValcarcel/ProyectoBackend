import mongoose from "mongoose";

const publicacionSchema = new mongoose.Schema(
  {
    estado: {
      type: mongoose.Schema.Types.String,
      required: true,
      enum: ["PERDIDO", "ENCONTRADO"],
    },
    activo: {
      type: mongoose.Schema.Types.Boolean,
      default: true,
    },
    descripcion: mongoose.Schema.Types.String,

    fechaAprox: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    // TODO:jalar ubicación de algún servicio
    lugar: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    mascotaId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

export const Publicacion = mongoose.model("publicacion", publicacionSchema);
