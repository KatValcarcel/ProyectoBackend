import { Mascota } from "../models/mascotas.model.js";
import fs from "fs";
export class ImagenService {
  static async subirImagen(id, nombreImagen) {
    const mascotaEncontrada = await Mascota.findById(id).catch(
      async (error) => {
        await fs.promises.unlink(nombreImagen);
        throw new Error("Mascota no existe");
      }
    );
    if (!mascotaEncontrada) {
      fs.promises.unlink(nombreImagen);
      throw new Error("Mascota no existe");
    }

    const mascotaActualizada = await Mascota.findOneAndUpdate(
      { _id: id },
      { mascotaImagen: nombreImagen },
      { new: true }
    );
    return mascotaActualizada;
  }
}
