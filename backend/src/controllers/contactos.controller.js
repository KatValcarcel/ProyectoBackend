import { contactoService } from "../services/contactos.service.js";
import { contactoDto } from "../dto/request/contacto.dto.js";

export async function registrarContacto(req, res) {
  try {
    const data = contactoDto(req.body);
    const nuevoContacto = await contactoService.registrar(data);
    console.log(nuevoContacto);
    return res.status(201).json(nuevoContacto);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear el usuario",
      content: error.message,
    });
  }
}

export async function olvidePassword(req, res) {
  const resultado = await contactoService.olvidePassword(req.body.email);
  if (resultado) {
    return res.status(204).send();
  } else {
    return res.status(404).json({ message: "Usuario no registrado" });
  }
}
export async function resetPassword(req, res) {
  const tokenRecibido = req.query.token;
  const resultado = await contactoService.resetPassword(
    tokenRecibido,
    req.body
  );
  if (resultado) {
    return res.status(204).send();
  } else {
    return res.status(404).json({ message: "Usuario no registrado" });
  }
}

export async function verUsuario(req, res) {
  try {
    const usuario = await contactoService.ver(req.params.id);
    res.status(200).json({ usuario });
  } catch (error) {
    res.status(404).json({ message: "No existe el contacto" });
  }
}
