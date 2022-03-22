import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRazas = async () => {
  return request.get("/razas");
};

export const getRaza = (data) => {
  return request.get("/raza/:id", data);
};
