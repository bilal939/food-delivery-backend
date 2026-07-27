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
    const user = await userRepository.createUser({
      ...body,
      password: hasedpass,
    });
    return {
      user: {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        isEmailVerified: user?.isEmailVerified,
      },
    };
  },
};
