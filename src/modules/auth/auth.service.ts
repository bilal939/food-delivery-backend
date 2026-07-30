import { UserDocument } from "../../types/auth.types";
import { ConflictError } from "../../utils/error/AppError";
import { emailService } from "../email/email.service";
import { otpService } from "../otp/otpservice";
import { hashPassword } from "./helper";
import { userRepository } from "./user.repository";
export const AuthService = {
  async register(body: UserDocument) {
    const existingUser = await userRepository.findbyEmail(body.email);
    if (existingUser) {
      throw new ConflictError("user already exists");
    }
    const hasedpass = await hashPassword(body.password);
    const user: any = await userRepository.createUser({
      ...body,
      password: hasedpass,
    });
    const response = await otpService.generateOtp(
      user?._id!,
      "EMAIL_VERIFICATION",
    );
    emailService.sendVerifcationEmail(
      user.email,
      { ...response, expiryMinutes: "10", name: user?.name },
      "Verify Email",
    );
    return {
      status: true,
      message: "user has been registered successfully",
    };
  },
};
