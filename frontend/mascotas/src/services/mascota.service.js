import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
export const registrarMascota = (token) => {
  return request.post("/mascota", {
    headers: { authorization: `Bearer ${token}` },
  });
};
export const listarMascotas = (token) => {
  return request.get("/mascotas", {
    headers: { authorization: `Bearer ${token}` },
  });
};
