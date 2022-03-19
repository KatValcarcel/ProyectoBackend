import { Router } from "express";
import {
  registrarContacto,
  olvidePassword,
  resetPassword,
} from "../controllers/contactos.controller.js";

export const contactoRouter = Router();

contactoRouter.route("/contacto").post(registrarContacto);
contactoRouter.post("/forgot-password", olvidePassword);
contactoRouter.post("/reset-password", resetPassword);
