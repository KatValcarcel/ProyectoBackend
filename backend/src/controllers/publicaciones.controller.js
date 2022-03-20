import { publicacionService } from "../services/publicacion.service.js";
import { publicacionDto } from "../dto/request/publicacion.dto.js";

export async function crearPublicacion(req, res) {
  try {
    const data = publicacionDto(req.body);
    const nuevaPublicacion = await publicacionService.crear(data);
    return res.status(201).json(nuevaPublicacion);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear la publicación",
      content: error.message,
    });
  }
}

export async function devolverPublicacionesEncontrados(req, res) {
  const resultado = await publicacionService.devolverMascotasEncontradas();
  return res.json(resultado);
}

export async function devolverPublicacionesPerdidos(req, res) {
  const resultado = await publicacionService.devolverMascotasPerdidas();
  return res.json(resultado);
}

export async function obtenerPublicaciones(req, res) {
  const resultado = await publicacionService.listar();
  return res.status(200).json(resultado);
}

export async function eliminarPublicacion(req, res) {
  const resultado = await publicacionService.eliminar(req.params.id);

  if (resultado) {
    return res.json(resultado);
  } else {
    return res.status(400).json({
      message: "Error al eliminar la publicación",
    });
  }
}

export async function actualizarPublicacion(req, res) {
  try {
    const { id } = req.params;
    const resultado = await publicacionService.actualizar(req.body, id);
    return res.status(201).json(resultado);
  } catch (error) {
    res.status(404).json({ message: "No se encuentra la publicación" });
  }
}
export async function verPublicacion(req, res) {
  try {
    const publicacion = await publicacionService.get(req.params.id);
    res.status(200).json({ publicacion });
  } catch (error) {
    res.status(404).json({ message: "No existe la publicación" });
  }
}
