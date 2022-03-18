import { Contacto } from "../models/contactos.model.js";
import { hashSync } from "bcrypt";
import cryptojs from "crypto-js";
import sgMail from "@sendgrid/mail";
export class contactoService {
  static async registrar(data) {
    try {
      const password = hashSync(data.password, 10);
      const NuevoContacto = await Contacto.create({ ...data, password });
      return NuevoContacto;
    } catch (error) {
      console.log(error);
    }
  }
  static async devolver() {
    const contactos = await Contacto.find();
    return contactos;
  }
  static async olvidePassword(email) {
    console.log(email);
    const usuarioEncontrado = await Contacto.findOne({ email });
    if (usuarioEncontrado) {
      const token = cryptojs.AES.encrypt(
        JSON.stringify({
          email: usuarioEncontrado.email,
          nombre: usuarioEncontrado.nombre,
        }),
        process.env.SECRET_CRYPT_PASSWORD
      ).toString();
      console.log(token);
      // aca enviaremos el correo
      const respuesta = await sgMail.send({
        from: "kat.valcarcel@live.com",
        text: `Ups, parece que has olvidado tu contraseña, ingresa a este link para restaurar la contraseña http://localhost:3001?token=${token}`,
        subject: "Restauracion de la contraseña",
        to: usuarioEncontrado.usuarioCorreo,
        html: `
      <h2>Hola, ¿has olvidado la contraseña?</h2>
      <p>Ingresa al siguiente link para restaurarla</p><code>http://localhost:3001?token=${token}</code>
      `,
      });
      console.log(respuesta);
    }
    console.log(usuarioEncontrado);
  }
  static async resetPassword(hash, password) {
    const tokenDecodificada = JSON.parse(
      cryptojs.AES.decrypt(hash, process.env.SECRET_CRYPT_PASSWORD).toString(
        cryptojs.enc.Utf8
      )
    );

    console.log(tokenDecodificada);

    // verificar si existe ese usuario (tokenDecodificada.correo) y si existe entonces cambiar la contraseña con el nuevo password, hashear la contraseña

    // implementar el controlador y que la ruta sea /reset-password Method POST
  }
}
