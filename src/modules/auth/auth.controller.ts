import { Request, Response } from "express";
import { AuthService as authService } from "./auth.service";
import { ok } from "../../utils/api-response";
export const AuthController = {
  async register(req: Request, res: Response) {
    const response = await authService.register(req.body);
    return ok(req, res, response);
  },
};
