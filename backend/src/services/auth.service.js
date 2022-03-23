import { compareSync } from "bcrypt";
import { Contacto } from "../models/contactos.model.js";

export class AuthService {
  static async login(email, password) {
    // console.log(email);
    const usuarioEncontrado = await Contacto.findOne({ email: email });

    // return usuarioEncontrado
    //   ? { message: "Usuario encontrado" }
    //   : { message: "Usuario no existe" };
    const resultado = compareSync(password, usuarioEncontrado.password);
    if (resultado) {
      const token = sign({ id: usuarioEncontrado._id }, "tokencillo", {
        expiresIn: "7d",
      });
      return { message: "Usuario identificado", token };
    } else {
      return { message: "Usuario no identificado" };
    }
  }
}
