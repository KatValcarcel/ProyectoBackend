import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
export const registrarPublicacion = (data, token) => {
  return request.post("/publicacion", data, {
    headers: { authorization: `Bearer ${token}` },
  });
};
export const verPublicaciones = (data) => {
  return request.get("/publicaciones", data);
};
export const verPublicacionesEncontrados = (data) => {
  return request.get("/publicaciones/encontrados", data);
};
export const verPublicacionesPerdidos = (data) => {
  return request.get("/publicaciones/perdidos", data);
};
export const verPublicacion = (data) => {
  return request.get("/publicacion/:id", data);
};
