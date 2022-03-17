import { Mascota } from "../models/mascotas.model.js";
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
}
