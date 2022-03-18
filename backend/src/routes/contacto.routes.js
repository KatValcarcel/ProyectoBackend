import { Router } from "express";
import {
  registrarContacto,
  olvidePassword,
} from "../controllers/contactos.controller.js";

export const contactoRouter = Router();

contactoRouter.route("/contacto").post(registrarContacto);
contactoRouter.post("/forgot-password", olvidePassword);
