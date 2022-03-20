import { Contacto } from "../models/contactos.model.js";
import { hashSync } from "bcrypt";
import cryptojs from "crypto-js";
import sgMail from "@sendgrid/mail";
import { Mascota } from "../models/mascotas.model.js";
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
      // console.log(token);
      // correo
      const respuesta = await sgMail.send({
        from: "kat.valcarcel@live.com",
        text: "Parece que has olvidado tu contraseña",
        subject: "Restablecer contraseña",
        to: usuarioEncontrado.email,
        html: `
        <h2>Hola ${usuarioEncontrado.nombre}, ¿has olvidado tu contraseña?</h2>
        <p>Ingresa al siguiente link para restaurarla: </p><code>http://localhost:3001/reset-password/?token=${token}</code>
        `,
      });
      console.log(respuesta);
    }
    console.log("USUARIO ENCONTRADO: ", usuarioEncontrado);
  }

  static async resetPassword(hash, password) {
    const tokenDecodificada = JSON.parse(
      cryptojs.AES.decrypt(hash, process.env.SECRET_CRYPT_PASSWORD).toString(
        cryptojs.enc.Utf8
      )
    );

    console.log("TOKEN DECODIFICADO:", tokenDecodificada);

    // verificar si existe ese usuario (tokenDecodificada.correo) y si existe entonces cambiar la contraseña con el nuevo password, hashear la contraseña

    // implementar el controlador y que la ruta sea /reset-password Method POST
  }
  static async ver(id) {
    const usuario = await Contacto.findById(id);
    //obtener mascotas
    const mascotas = await Promise.all(
      usuario.mascotas.map(async (_id) => {
        const mascota = await Mascota.findById(_id);

        return mascota;
      })
    );
    return { ...usuario._doc, mascotas };
  }
}
