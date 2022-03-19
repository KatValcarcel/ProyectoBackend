import { Publicacion } from "../models/publicaciones.model.js";
import { Mascota } from "../models/mascotas.model.js";

export class publicacionService {
  static async crear({ data, mascotaId }) {
    //buscar mascota registrada
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
    const nuevaPublicacion = await Publicacion.create({ data, mascotaId });

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
  //   TODO ultimas 10
  static async devolverMascotasEncontradas() {
    const razas = await Publicacion.find({ estado: "ENCONTRADO" }).sort([
      ["createdAt", "desc"],
    ]);
    return razas;
  }
  static async devolverMascotasPerdidas() {
    const razas = await Publicacion.find({ estado: "PERDIDO" }).sort([
      ["createdAt", "asc"],
    ]);
    return razas;
  }
  static async listar() {
    const publicaciones = await Publicacion.find().sort({ createdAt: "desc" });
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
      const publicacionEliminada = await Publicacion.findByIdAndDelete(id);

      return publicacionEliminada;
    } catch (error) {
      console.error(error);
    }
  }
}
