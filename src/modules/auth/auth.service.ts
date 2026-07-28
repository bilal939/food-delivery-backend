import { ConflictError } from "../../utils/error/AppError";
import { registerPayload } from "./auth.types";
import { hashPassword } from "./helper";
import { userRepository } from "./user.repository";
export const AuthService = {
  async register(body: registerPayload) {
    const existingUser = await userRepository.findbyEmail(body.email);
    if (existingUser) {
      throw new ConflictError("user already exists");
    }
    const hasedpass = await hashPassword(body.password);
    await userRepository.createUser({
      ...body,
      password: hasedpass,
    });
    return {
      status: true,
      message: "user has been registered successfully",
    };
  },
};
