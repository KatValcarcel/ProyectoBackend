import validator from "validator";

export function contactoDto({ nombre, email, telefono, password }) {
  if (validator.isEmpty(nombre)) {
    throw Error("El nombre no puede estar vacío");
  }
  if (!validator.isEmail(email)) {
    throw Error("Debe ser un correo válido");
  }
  if (!validator.isMobilePhone(telefono, "es-PE")) {
    throw Error("No es un teléfono válido");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Su contraseña debe tener al menos 8 caracteres (hasta 32 caracteres) y al menos un número y una letra"
    );
  }
  return { nombre, email, telefono, password };
}
