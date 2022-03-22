import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
export const registrarMascota = (data, token) => {
  return request.post("/mascota", data, {
    headers: { authorization: `Bearer ${token}` },
  });
};
export const listarMascotas = (id, token) => {
  return request.get(`/mascotas/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};
