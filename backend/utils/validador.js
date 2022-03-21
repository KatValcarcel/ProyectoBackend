import jwt from "jsonwebtoken";
import { Contacto } from "../src/models/contactos.model.js";

export function verificarToken(token) {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (error) {
    return error.message;
  }
}

export async function validarUsuario(req, res, next) {
  // middleware
  // es un intermediario entre el cliente y el controlador final
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Se necesita una token para realizar esta solicitud",
    });
  }

  // BEARER
  const token = req.headers.authorization.split(" ")[1];
  const resultado = verificarToken(token);
  if (typeof resultado === "object") {
    const usuario = await Contacto.findById(resultado.id).select("correo _id");
    req.user = usuario;
    // const { id } = resultado;
    // req.user = id;

    next();
  } else {
    return res.status(401).json({
      message: "Error al hacer la petición",
      content: resultado,
    });
  }
}
