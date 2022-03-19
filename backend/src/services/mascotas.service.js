import { Mascota } from "../models/mascotas.model.js";
import { Contacto } from "../models/contactos.model.js";
import { Raza } from "../models/razas.model.js";
import fs from "fs";
export class MascotaService {
  // TODO: Se debe jalar del usuario logueado para establecer la relación
  static async crear(data, razaId) {
    //buscar raza
    const razaEncontrada = await Raza.findById(razaId);
    if (!razaEncontrada) {
      return {
        message: "Id de raza inválido",
      };
    }
    // validar que no exista esa mascota del mismo dueño previamente .findOne({ nombreMascota, contactoId});
    // const registro = await Mascota.findOne({ mascotaId});
    // if (registro) {
    //   return {
    //     message: "Ya hay una mascota registrada",
    //   };
    // }

    //crear
    //TODO: contactoID
    const nuevaMascota = await Mascota.create({ data, razaId });

    //establecer relación en contacto
    // await Contacto.updateOne(
    //   { _id: contacto._id },
    //   {
    //     mascotas: [
    //       ...contacto.publicaciones,
    //       nuevaMascota._id,
    //     ],
    //   }
    // );
  }
  static async devolver() {
    const mascotas = await Mascota.find();
    return mascotas;
  }
  static async eliminar(id) {
    try {
      const mascotaEncontrada = await Mascota.findById(id);
      if (mascotaEncontrada.mascotaImagen) {
        await fs.promises.unlink(mascotaEncontrada.mascotaImagen);
      }
      const mascotaEliminada = await Mascota.findByIdAndDelete(id);

      return mascotaEliminada;
    } catch (error) {
      console.error(error);
    }
  }
}
