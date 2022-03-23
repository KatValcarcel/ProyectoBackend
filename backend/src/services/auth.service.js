import jwt from "jsonwebtoken";
import { compareSync } from "bcrypt";
import { Contacto } from "../models/contactos.model.js";

export class AuthService {
  static async login(email, password) {
    // console.log(email);
    const user = await Contacto.findOne({ email: email });

    // return usuarioEncontrado
    //   ? { message: "Usuario encontrado" }
    //   : { message: "Usuario no existe" };
    const resultado = compareSync(password, user.password);
    if (resultado) {
      const token = jwt.sign(
        {
          id: user._id,
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      return { message: "Usuario identificado", token };
    } else {
      return { message: "Usuario no identificado" };
    }
  }
}
