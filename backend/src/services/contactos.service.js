import { Contacto } from "../models/contactos.model.js";
export class ContactoService {
  static async crear(data) {
    try {
      const NuevoContacto = await Contacto.create(data);
      return NuevoContacto;
    } catch (error) {
      console.log(error);
    }
  }
}
