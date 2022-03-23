import validator from "validator";

export function loginDTO({ email, password }) {
  if (validator.isEmpty(email) || validator.isEmpty(email)) {
    throw Error("Ingrese correo y contraseña");
  }
  return { email, password };
}
