import mongoose from "mongoose";
import { hashSync } from "bcrypt";

const contactoSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export const Contacto = mongoose.model("contacto", contactoSchema);
