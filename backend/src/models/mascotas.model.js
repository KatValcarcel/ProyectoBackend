import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.Types.String,
    required: true,
    alias: "nombreMascota",
  },
  especie: {
    type: mongoose.Schema.Types.String,
    enum: ["PERRO", "GATO"],
    required: true,
  },
  raza: {
    type: mongoose.Schema.Types.String,
    // required: true,
  },
  color: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  sexo: {
    type: mongoose.Schema.Types.String,
    enum: ["MACHO", "HEMBRA"],
    required: true,
  },
  edad_aprox: {
    type: mongoose.Schema.Types.String,
  },
  mascotaImagen: {
    type: mongoose.Schema.Types.String,
    alias: "imagen",
  },
  descripcion: {
    type: mongoose.Schema.Types.String,
  },
  estado: {
    type: mongoose.Schema.Types.String,
    required: true,
    enum: ["Perdido", "Encontrado", "EnCasa"],
    alias: "estadoMascota",
  },
});

export const Mascota = mongoose.model("mascota", mascotaSchema);
