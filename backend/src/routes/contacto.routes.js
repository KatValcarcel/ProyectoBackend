import { Router } from "express";
import {
  registrarContacto,
  olvidePassword,
  resetPassword,
  verUsuario,
} from "../controllers/contactos.controller.js";

export const contactoRouter = Router();

contactoRouter.route("/contacto").post(registrarContacto);
contactoRouter.post("/forgot-password", olvidePassword);
contactoRouter.post("/reset-password", resetPassword);
contactoRouter.route("/contacto/:id").get(verUsuario);
