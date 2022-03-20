import { archivoDto } from "../dto/request/archivo.dto.js";
import { ArchivosService } from "../services/archivos.service.js";

export async function crearArchivo(req, res) {
  try {
    const data = archivoDto(req.body);
    const url = await ArchivosService.crearArchivo(data);
    return res.status(201).json({ url });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
