import { Raza } from "../models/razas.model.js";

export class RazaService {
  static async crear(data) {
    try {
      const nuevaRaza = await Raza.create(data);
      return nuevaRaza;
    } catch (error) {
      console.log(error);
    }
  }
  static async devolver() {
    const razas = await Raza.find().sort([["nombreRaza", "ascending"]]);
    return razas;
  }
}
