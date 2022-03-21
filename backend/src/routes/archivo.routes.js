import { Router } from "express";
import { validarUsuario } from "../../utils/validador.js";
import { crearArchivo } from "../controllers/archivo.controller.js";

export const archivoRouter = Router();

archivoRouter.route("/archivo").all(validarUsuario).post(crearArchivo);
