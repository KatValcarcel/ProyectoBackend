import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
export const enviarMail = (data) => {
  return request.post("/forgot-password", data);
};
export const resetPassword = (data) => {
  return request.post("/reset-password", data);
};
