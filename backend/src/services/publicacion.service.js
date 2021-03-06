import { Publicacion } from "../models/publicaciones.model.js";
import { Mascota } from "../models/mascotas.model.js";
import { Contacto } from "../models/contactos.model.js";

export class publicacionService {
  static async crear(data) {
    //buscar mascota registrada
    const { mascotaId } = data;
    const mascotaEncontrada = await Mascota.findById(mascotaId);
    if (!mascotaEncontrada) {
      return {
        message: "Mascota inválida",
      };
    }
    // validar que no exista esa publicacion previamente
    const registro = await Publicacion.findOne({ mascotaId, activo: true });
    if (registro) {
      return {
        message: "Ya hay una publicacion activa",
      };
    }
    //crear
    const nuevaPublicacion = await Publicacion.create(data);

    //establecer relación en mascota
    await Mascota.updateOne(
      { _id: mascotaEncontrada._id },
      {
        publicaciones: [
          ...mascotaEncontrada.publicaciones,
          nuevaPublicacion._id,
        ],
      }
    );
    return nuevaPublicacion;
  }
  //   TODO: ultimas 10
  // Devolver publicaciones según su tipo
  static async devolverMascotasEncontradas() {
    const razas = await Publicacion.find({ estado: "ENCONTRADO" }).sort({
      updatedAt: "asc",
    });
    return razas;
  }
  static async devolverMascotasPerdidas() {
    const razas = await Publicacion.find({ estado: "PERDIDO" }).sort({
      updatedAt: "asc",
    });
    return razas;
  }
  //listar todas
  static async listar() {
    const publicaciones = await Publicacion.find().sort({ updatedAt: "asc" });
    return publicaciones;
  }

  static async actualizar(data, id) {
    const publicacionActualizada = await Publicacion.findOneAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      }
    );

    return publicacionActualizada;
  }

  static async eliminar(id) {
    try {
      //eliminar relación en mascota
      const publicacion = await Publicacion.findById(id);
      const { mascotaId } = publicacion;
      const mascotaEncontrada = await Mascota.findById(mascotaId);
      await Mascota.updateOne(
        { _id: mascotaEncontrada._id },
        {
          $pullAll: {
            publicaciones: [{ _id: publicacion._id }],
          },
        }
      );

      const publicacionEliminada = await Publicacion.findByIdAndDelete(id);

      return publicacionEliminada;
    } catch (error) {
      console.error(error);
    }
  }

  static async actualizar(data, id) {
    const publicacionActualizada = await Publicacion.findOneAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      }
    );

    return publicacionActualizada;
  }

  static async get(id) {
    const publicacion = await Publicacion.findById(id);
    const mascotaEncontrada = await Mascota.findById(
      publicacion.mascotaId.valueOf()
    );
    const contactoEncontrado = await Contacto.findById(
      mascotaEncontrada.contactoId.valueOf()
    );
    const { telefono } = contactoEncontrado;
    // console.log(mascotaEncontrada);
    // const contactoId = mascotaEncontrada.contactoId;
    // console.log(contactoId);
    // const contactoEncontrado = await Contacto.findOne({
    //   contactoId,
    //   activo: true,
    // });
    const publicacionConMascota = {
      ...publicacion._doc,
      mascota: mascotaEncontrada,
      contacto: telefono,
    };
    return publicacionConMascota;
  }
}
