import { loginDTO } from "../dto/request/login.dto.js";
import { AuthService } from "../services/auth.service.js";

export async function login(req, res) {
  try {
    // const data = loginDTO(req.body);
    const result = await AuthService.login(req.body.email, req.body.password);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({
      message: "Error con el login",
      error: e.message,
    });
  }
}
