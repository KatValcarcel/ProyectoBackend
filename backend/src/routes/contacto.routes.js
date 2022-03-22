import { Router } from "express";
import {
  registrarContacto,
  olvidePassword,
  resetPassword,
  verUsuario,
} from "../controllers/contactos.controller.js";
import { validarUsuario } from "../../utils/validador.js";

export const contactoRouter = Router();

contactoRouter.post("/registrar", registrarContacto);
contactoRouter.post("/forgot-password", olvidePassword);
contactoRouter.post("/reset-password", resetPassword);
contactoRouter.route("/contacto/:id").all(validarUsuario).get(verUsuario);
