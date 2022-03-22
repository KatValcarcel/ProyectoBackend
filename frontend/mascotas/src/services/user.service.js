import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
export const getServerInfo = () => {
  return request.get("/status");
};
export const createUser = (data) => {
  return request.post("/registrar", data);
};
export const getUser = (token) => {
  return request.get("/contacto/:id", {
    headers: { authorization: `Bearer ${token}` },
  });
};

export const subirArchivo = (token) => {
  return request.post("/archivo", {
    headers: { authorization: `Bearer ${token}` },
  });
};
