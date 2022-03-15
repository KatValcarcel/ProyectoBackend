import { Router } from "express";
import { crearContacto } from "../controllers/contactos.controller.js";

export const contactoRouter = Router();

contactoRouter.route("/contacto").post(crearContacto);
