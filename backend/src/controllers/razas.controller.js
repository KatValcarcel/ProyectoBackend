import { RazaService } from "../services/razas.service.js";
import { razaDto } from "../dto/request/raza.dto.js";

export async function crearRaza(req, res) {
  try {
    const data = razaDto(req.body);
    const nuevaRaza = await RazaService.crear(data);
    return res.status(201).json(nuevaRaza);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear la raza",
      content: error.message,
    });
  }
}

export async function devolverRazas(req, res) {
  const resultado = await RazaService.devolver();
  return res.json(resultado);
}
