import validator from "validator";

export function razaDto({ nombreRaza }) {
  if (validator.isEmpty(nombreRaza)) {
    throw Error("El nombre no puede estar vacío");
  }
  return { nombreRaza };
}
