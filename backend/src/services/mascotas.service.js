import { Mascota } from "../models/mascotas.model.js";
import { Contacto } from "../models/contactos.model.js";
import { publicacionService } from "../services/publicacion.service.js";
import { Raza } from "../models/razas.model.js";
// import fs from "fs";
import { Publicacion } from "../models/publicaciones.model.js";
import { ArchivosService } from "./archivos.service.js";
export class MascotaService {
  // TODO: Se debe jalar del usuario logueado para establecer la relación
  static async crear(data) {
    //buscar raza
    const { razaId } = data;
    const razaEncontrada = await Raza.findById(razaId);
    if (!razaEncontrada) {
      return {
        message: "Id de raza inválido",
      };
    }
    // validar que no exista esa mascota del mismo dueño previamente .findOne({ nombreMascota, contactoId});
    const { nombre, contactoId } = data;
    const registro = await Mascota.findOne({ nombre, contactoId });
    if (registro) {
      return {
        message: "Ya hay una mascota registrada",
      };
    }

    //crear
    const nuevaMascota = await Mascota.create(data);

    return nuevaMascota;
  }
  static async devolver() {
    const mascotas = await Mascota.find();

    return mascotas;
  }
  static async eliminar(id) {
    try {
      //eliminar imagen vinculada
      //LOCAL
      // const mascotaEncontrada = await Mascota.findById(id);
      // if (mascotaEncontrada.mascotaImagen) {
      //   await fs.promises.unlink(mascotaEncontrada.mascotaImagen);
      // }
      //S3
      const mascotaEncontrada = await Mascota.findById(id);
      if (mascotaEncontrada.mascotaImagen) {
        ArchivosService.eliminarArchivo(mascotaEncontrada.mascotaImagen);
      }

      //eliminar publicaciones vinculadas
      const { publicaciones } = mascotaEncontrada;
      publicaciones.forEach(async (_id) => {
        await publicacionService.eliminar(_id);
      });

      //elimina finalmente la mascota
      const mascotaEliminada = await Mascota.findByIdAndDelete(id);

      return mascotaEliminada;
    } catch (error) {
      console.error(error);
    }
  }
  static async get(id) {
    const mascota = await Mascota.findById(id);
    console.log(mascota, "mascota");
    //obtener publicaciones
    if (mascota.publicaciones) {
      const publicaciones = await Promise.all(
        mascota.publicaciones.map(async (_id) => {
          const publicacion = await Publicacion.findById(_id);
          return { ...publicacion, mascota };
        })
      );
    }
    // //imagen
    // const mascotaConImagen = {
    //   ...mascota._doc,
    //   mascotaImagen: ArchivosService.devolverURL(mascota.mascotaImagen),
    // };
    // return { ...mascotaConImagen, publicaciones };
    return mascota;
  }

  static async actualizar(data, id) {
    const mascotaActualizada = await Publicacion.findOneAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      }
    );

    return mascotaActualizada;
  }
}
