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
      content: error.message,
    });
  }
}

export async function devolverMascotas(req, res) {
  const resultado = await MascotaService.devolver();
  return res.json(resultado);
}
export async function eliminarMascota(req, res) {
  const resultado = await MascotaService.eliminar(req.params.id);

  if (resultado) {
    return res.json(resultado);
  } else {
    return res.status(400).json({
      message: "Error al eliminar la mascota",
    });
  }
}
