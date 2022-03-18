import { Mascota } from "../models/mascotas.model.js";
import fs from "fs";
export class MascotaService {
  static async crear(data) {
    try {
      const nuevaMascota = await Mascota.create(data);
      return nuevaMascota;
    } catch (error) {
      console.log(error);
    }
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
