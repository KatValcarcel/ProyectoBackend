import mongoose from "mongoose";
import { hashSync } from "bcrypt";

const contactoSchema = new mongoose.Schema(
  {
    nombre: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    apellido: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    usuario: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
      lowercase: true,
    },
    telefono: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
      maxLength: 9,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
      set: (valor) => {
        const cryptPass = hashSync(valor, 10);
        return cryptPass;
      },
    },
    mascotas: {
      type: [mongoose.Schema.Types.ObjectId],
    },
    tipo: {
      type: mongoose.Schema.Types.String,
      enum: ["KATMINI", "USER"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

export const Contacto = mongoose.model("contacto", contactoSchema);
