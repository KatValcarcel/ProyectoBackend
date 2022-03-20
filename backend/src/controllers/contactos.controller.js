import { contactoService } from "../services/contactos.service.js";
import { contactoDto } from "../dto/request/contacto.dto.js";

export async function registrarContacto(req, res) {
  try {
    const data = contactoDto(req.body);
    const nuevoContacto = await contactoService.registrar(data);
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

  return res.status(204).send();
}
export async function resetPassword(req, res) {
  const tokenRecibido = req.query.token;
  const { nuevoPass } = req.body;
  const tokenDirecto =
    "U2FsdGVkX18XwGGXY9C+7Alqzn0wmASXydeyVY5acm4AuxZEV5HQuqnog+2r/PWVye09r5EmT7Y8JzSZtc4jOD1klTg3QG+Tp12HER+YDHE=";
  const resultado = await contactoService.resetPassword(
    tokenDirecto,
    nuevoPass
  );
  console.log("TOKEN:", tokenRecibido.trim());
  console.log("PASS:", nuevoPass);
  return res.status(204).json({ mensaje: "token recibido" });
}

export async function verUsuario(req, res) {
  try {
    const usuario = await contactoService.ver(req.params.id);
    res.status(200).json({ usuario });
  } catch (error) {
    res.status(404).json({ message: "No existe el contacto" });
  }
}
