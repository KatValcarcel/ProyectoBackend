import { ContactoService } from "../services/contactos.service.js";
import { contactoDto } from "../dto/request/contacto.dto.js";

export async function crearContacto(req, res) {
  try {
    const data = contactoDto(req.body);
    const nuevoContacto = await ContactoService.crear(data);
    return res.status(201).json(nuevoContacto);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear el usuario",
      content: error,
    });
  }
}

//yo no necesito la lista de usuarios, si se usa hay que poner la ruta .get(devolverContactos)

// export async function devolverContactos(req, res) {
//   const resultado = await ContactoService.devolver();
//   return res.json(resultado);
// }
