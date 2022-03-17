import { MascotaService } from "../services/mascotas.service.js";
import { mascotaDto } from "../dto/request/mascota.dto.js";

export async function crearMascota(req, res) {
  try {
    const data = mascotaDto(req.body);
    const nuevaMascota = await MascotaService.crear(data);
    return res.status(201).json(nuevaMascota);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear la mascota",
      content: error,
    });
  }
}

export async function devolverMascotas(req, res) {
  const resultado = await MascotaService.devolver();
  return res.json(resultado);
}
