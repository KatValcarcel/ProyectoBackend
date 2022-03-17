import validator from "validator";

export function publicacionDto({ estado, descripcion, fechaAprox, lugar }) {
  if (!validator.isBoolean(estado)) {
    throw Error("El estado debe ser true o false");
  }
  return { estado, descripcion, fechaAprox, lugar };
}
