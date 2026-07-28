import { Request, Response } from "express";
import { AuthService as authService } from "./auth.service";
import { created } from "../../utils/api-response";
export const AuthController = {
  async register(req: Request, res: Response) {
    const response = await authService.register(req.body);
    return created(req, res, response, response.message);
  },
};
