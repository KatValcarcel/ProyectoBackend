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
//Devolver mascotas de usuario
export async function devolverMascotas(req, res) {
  const resultado = await MascotaService.devolver(req.contactoId);
  return res.json(resultado);
}

export async function getMascota(req, res) {
  try {
    const mascota = await MascotaService.get(req.params.id);
    console.log("Mascota:", mascota);
    res.status(200).json({ mascota });
  } catch (error) {
    res
      .status(404)
      .json({ message: "No existe la mascota", error: error.message });
  }
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
export async function putMascota(req, res) {
  try {
    const { id } = req.params;
    const resultado = await MascotaService.actualizar(req.body, id);
    return res.status(201).json(resultado);
  } catch (error) {
    res.status(404).json({ message: "No existe la mascota" });
  }
}
