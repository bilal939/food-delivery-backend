import { otpModel } from "../../models/otp.mode";
import { otp } from "../../types/auth.types";
export const otpRepository = {
  async createHasedOtp(data: otp): Promise<otp | null> {
    return await otpModel.create(data);
  },
};
