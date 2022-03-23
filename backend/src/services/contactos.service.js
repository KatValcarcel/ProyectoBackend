// import { hashSync } from "bcrypt";
import cryptojs from "crypto-js";
import sgMail from "@sendgrid/mail";
import jwt from "jsonwebtoken";
import { Contacto } from "../models/contactos.model.js";
import { Mascota } from "../models/mascotas.model.js";

export class contactoService {
  static async registrar(data) {
    try {
      // const password = hashSync(data.password, 10);
      // const user = await Contacto.create({ ...data, password });
      const user = await Contacto.create(data);
      //JWT
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
      return {
        token,
      };
    } catch (error) {
      return { error: error.message };
    }
  }
  static async devolver() {
    const contactos = await Contacto.find();
    return contactos;
  }
  static async olvidePassword(email) {
    var encontrado = false;
    const usuarioEncontrado = await Contacto.findOne({ email });
    if (usuarioEncontrado) {
      encontrado = true;
      const token = cryptojs.AES.encrypt(
        JSON.stringify({
          email: usuarioEncontrado.email,
          nombre: usuarioEncontrado.nombre,
        }),
        process.env.SECRET_CRYPT_PASSWORD
      ).toString();

      // correo
      const respuesta = await sgMail.send({
        from: "kat.valcarcel@live.com",
        text: "Parece que has olvidado tu contraseña",
        subject: "Restablecer contraseña",
        to: usuarioEncontrado.email,
        html: `
        <h2>Hola ${usuarioEncontrado.nombre}, ¿has olvidado tu contraseña?</h2>
        <p>Ingresa al siguiente link para restaurarla: </p><code>${process.env.URL_PROD}reset-password/?token=${token}</code>
        `,
      });
      console.log(respuesta);
    }
    return encontrado;
    // console.log("USUARIO ENCONTRADO: ", usuarioEncontrado);
  }

  static async resetPassword(hash, password) {
    const tokenDecodificada = JSON.parse(
      cryptojs.AES.decrypt(
        hash.replace(/ /g, "+"),
        process.env.SECRET_CRYPT_PASSWORD
      ).toString(cryptojs.enc.Utf8)
    );

    const { email } = tokenDecodificada;
    const usuarioEncontrado = await Contacto.findOne({ email });
    if (usuarioEncontrado) {
      this.actualizar(password, usuarioEncontrado._id);
    }
    return usuarioEncontrado;
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
  static async actualizar(data, id) {
    const usuarioActualizado = await Contacto.findOneAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      }
    );
    return usuarioActualizado;
  }
}
